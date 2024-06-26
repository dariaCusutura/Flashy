import {
  Inject,
  Injectable,
  InternalServerErrorException,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './card.schema';
import { CreateCardDto } from './dto/create-card.dto';
import { UsersService } from 'src/users/users.service';
import { StacksService } from 'src/stacks/stacks.service';
import { Messages } from 'src/messages/messages.enum';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardNotFoundException } from './exceptions/card-not-found.exception';
import { PageNumberTooLowException } from 'src/stacks/exceptions/page-number-too-low.exception';
import { PageNumberTooHighException } from 'src/stacks/exceptions/page-number-too-high.exception';
import { CannotDoCardOperationException } from './exceptions/cannot-do-card-operation.exception';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card.name) private cardModel: Model<Card>,
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    @Inject(forwardRef(() => StacksService))
    private stackService: StacksService,
  ) {}

  async add(createCardDto: CreateCardDto, userId: string) {
    await this.userService.validateUserExists(userId);
    //check if stack exists
    const stack = await this.stackService.validateStackExists(
      createCardDto.stack,
    );
    //check if user is the author of the stack
    await this.validateAuthor(userId, stack.author);

    const newCard = new this.cardModel(createCardDto);
    await newCard.save();

    stack.cards.push(newCard._id.toString());
    await stack.save();
    return { message: Messages.CardCreated };
  }

  async getAll(
    queryParams: {
      stack: string;
      label?: string;
      searchTerm?: string;
      page?: string;
    },
    userId: string,
  ) {
    //check if stack exists
    const stack = await this.stackService.validateStackExists(
      queryParams.stack,
    );
    //check if user is the author of the stack
    await this.validateAuthor(userId, stack.author);

    const { page = '1', ...query } = queryParams;
    const current_page = parseInt(page);

    if (current_page < 1) {
      throw new PageNumberTooLowException();
    }

    let finalQuery = {};
    //not allowing filtering by label to overlap with searching
    if (query.searchTerm) {
      finalQuery = {
        stack: query.stack,
        question: { $regex: query.searchTerm, $options: 'i' },
      };
    } else {
      finalQuery = { ...query };
    }

    const totalCards = await this.cardModel.countDocuments(finalQuery);
    const take = 6;
    const total_pages = Math.ceil(totalCards / take);

    if (current_page > total_pages && total_pages !== 0) {
      throw new PageNumberTooHighException();
    }

    const skip = (current_page - 1) * take;

    const next_page =
      current_page < total_pages ? current_page + 1 : total_pages;
    const previous_page = current_page > 1 ? current_page - 1 : 1;

    return await this.cardModel
      .find(finalQuery, null, { skip, limit: take })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      })
      .then((data) => {
        const cards = data.map((card) => {
          return {
            _id: card._id.toString(),
            question: card.question,
            answer: card.answer,
            label: card.label,
          };
        });
        return {
          cards: cards,
          pagination: {
            previous_page,
            current_page,
            next_page,
            total_pages,
            records_on_page: cards.length,
            total_records: totalCards,
          },
        };
      });
  }

  async getOne(cardId: string) {
    const card = await this.cardModel.findById(cardId).catch((error) => {
      throw new InternalServerErrorException(error);
    });
    if (!card) throw new CardNotFoundException();
    return card;
  }

  async update(cardId: string, updateCardDto: UpdateCardDto, userId: string) {
    const card = await this.validateCardExists(cardId);
    const stack = await this.stackService.validateStackExists(
      card.stack.toString(),
    );
    await this.validateAuthor(userId, stack.author);

    return await this.cardModel
      .findByIdAndUpdate(cardId, updateCardDto)
      .catch((error) => {
        throw new InternalServerErrorException(error);
      })
      .then(() => {
        return { message: Messages.CardUpdated };
      });
  }

  async delete(cardId: string, userId: string) {
    try {
      const card = await this.validateCardExists(cardId);
      const stack = await this.stackService.validateStackExists(
        card.stack.toString(),
      );
      await this.validateAuthor(userId, stack.author.toString());

      // Remove card from stack
      const updatedStack = await this.stackService.deleteCard(
        cardId,
        card.stack.toString(),
      );
      if (!updatedStack)
        throw new Error('Failed to update stack with removed card');

      // Delete card from database
      await this.cardModel.findByIdAndDelete(cardId).exec();

      return { message: Messages.CardDeleted };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteAllCardsByStack(stackId: string) {
    await this.stackService.validateStackExists(stackId);
    return await this.cardModel.deleteMany({ stack: stackId }).catch((err) => {
      console.log('cards.service: delete stack error');
      throw new Error(err.message);
    });
  }

  async deleteAllCardsByStacks(stacksIds: string[]) {
    try {
      await this.cardModel.deleteMany({ stack: { $in: stacksIds } }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async validateAuthor(userId: string, authorId: string) {
    if (userId !== authorId) throw new CannotDoCardOperationException();
  }

  async validateCardExists(cardId: string) {
    const card = await this.cardModel.findById(cardId).exec();
    if (!card) throw new CardNotFoundException();
    return card;
  }
}
