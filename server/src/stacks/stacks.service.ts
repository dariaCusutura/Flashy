import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { Stack } from './stack.schema';
import { Model } from 'mongoose';
import { CreateStackDto } from './dto/create-stack.dto';
import { CardsService } from 'src/cards/cards.service';
import { Messages } from 'src/messages/messages.enum';
import { UpdateStackDto } from './dto/update-stack.dto';
import { PageNumberTooLowException } from './exceptions/page-number-too-low.exception';
import { PageNumberTooHighException } from './exceptions/page-number-too-high.exception';
import { CannotDoStackOperationException } from './exceptions/cannot-do-stack-operation.exception';

@Injectable()
export class StacksService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    @Inject(forwardRef(() => CardsService))
    private cardService: CardsService,
    @InjectModel(Stack.name) private stackModel: Model<Stack>,
  ) {}

  async create(userId: string, createStackDto: CreateStackDto) {
    //check if user exists
    await this.userService.validateUserExists(userId);

    const newStack = new this.stackModel({ ...createStackDto, author: userId });

    try {
      await newStack.save();
      await this.userService.addStack(userId, newStack.id);
      return { message: Messages.StackCreated };
    } catch (error) {
      console.error('Error adding new stack:');
      throw new Error(error.message);
    }
  }

  async getAll(
    queryParams: { page?: string; saved?: boolean; searchTerm: string },
    userId: string,
  ) {
    const { page, ...query } = queryParams;
    let finalQuery = {};
    //not allowing filtering by saved to overlap with searching
    if (query.searchTerm) {
      finalQuery = {
        author: userId,
        title: { $regex: query.searchTerm, $options: 'i' },
      };
    } else {
      finalQuery = { author: userId, ...query };
    }

    if (page && parseInt(page) < 1) {
      throw new PageNumberTooLowException();
    }
    const totalStacks = await this.stackModel.countDocuments(finalQuery);
    const take = 6;
    const total_pages = Math.ceil(totalStacks / take);

    if (page && parseInt(page) > total_pages && total_pages !== 0) {
      throw new PageNumberTooHighException();
    }

    const skip = page ? (parseInt(page) - 1) * take : undefined;

    const current_page = page ? parseInt(page) : 1;
    let next_page = page ? current_page + 1 : 1;
    let previous_page = page ? current_page - 1 : 1;

    if (current_page === total_pages) {
      next_page = total_pages;
    }
    if (current_page === 1) {
      previous_page = 1;
    }
    return await this.stackModel
      .find(finalQuery, null, { skip, limit: take })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      })
      .then((data) => {
        const stacks = data.map((stack) => {
          return {
            _id: stack._id,
            title: stack.title,
            author: stack.author,
            saved: stack.saved,
            cardsNumber: stack.cards.length,
          };
        });
        return {
          stacks,
          pagination: {
            previous_page,
            current_page,
            next_page,
            total_pages,
            records_on_page: stacks.length,
            total_records: totalStacks,
          },
        };
      });
  }

  async getOne(userId: string, stackId: string) {
    const stack = await this.validateStackExists(stackId);
    await this.userService.validateUserExists(userId);
    await this.validateAuthor(stack.author, userId);
    return stack;
  }

  async delete(stackId: string, userId: string) {
    const stack = await this.validateStackExists(stackId);
    await this.userService.validateUserExists(userId);
    await this.validateAuthor(stack.author, userId);

    await this.cardService.deleteAllCardsByStack(stackId);
    await this.userService.deleteStack(userId, stackId);
    return await this.stackModel
      .findByIdAndDelete(stackId)
      .catch((err) => {
        console.log('stack.service: delete stack error');
        throw new Error(err.message);
      })
      .then(() => {
        return Messages.StackDeleted;
      });
  }

  async deleteAllStacksByAuthor(authorId: string) {
    try {
      await this.stackModel.deleteMany({ author: authorId }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(
    userId: string,
    stackId: string,
    updateStackDto: UpdateStackDto,
  ) {
    const stack = await this.validateStackExists(stackId);
    await this.userService.validateUserExists(userId);
    await this.validateAuthor(stack.author, userId);

    return await this.stackModel
      .findByIdAndUpdate(stackId, updateStackDto)
      .catch((error) => {
        console.log('Error updating the stack');
        throw new Error(error.message);
      })
      .then(() => {
        return { messsage: Messages.StackUpdated };
      });
  }

  async deleteCard(cardId: string, stackId: string) {
    try {
      const updatedStack = await this.stackModel
        .findByIdAndUpdate(stackId, { $pull: { cards: cardId } }, { new: true })
        .exec();

      if (!updatedStack) {
        throw new NotFoundException(`Stack with id ${stackId} not found`);
      }

      return updatedStack;
    } catch (error) {
      console.log('stack.service: delete card error');
      throw new Error(error.message);
    }
  }
  async findById(stackId: string, session?: any) {
    return await this.stackModel.findById(stackId).session(session).exec();
  }

  async validateStackExists(stackId: string) {
    const stack = await this.stackModel.findById(stackId);
    if (!stack) {
      throw new NotFoundException('Stack not found');
    }
    return stack;
  }

  async validateAuthor(authorId: string, userId: string) {
    if (authorId !== userId) throw new CannotDoStackOperationException();
  }
}
