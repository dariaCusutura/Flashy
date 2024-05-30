import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { Stack } from './stack.schema';
import { Model } from 'mongoose';
import { CreateStackDto } from './dto/create-stack.dto';
import { CardsService } from 'src/cards/cards.service';
import { Messages } from 'src/messages/messages.enum';
import { StackNotFound } from './exceptions/stack-not-found.exception';
import { CannotDeleteStack } from './exceptions/cannot-delete-stack.exception';
import { UpdateStackDto } from './dto/update-stack.dto';
import { CannotUpdateStack } from './exceptions/cannot-update-stack.exception';
import { PageNumberTooLowException } from './exceptions/page-number-too-low.exception';
import { PageNumberTooHighException } from './exceptions/page-number-too-high.exception';

@Injectable()
export class StacksService {
  constructor(
    private userService: UsersService,
    private cardService: CardsService,
    @InjectModel(Stack.name) private stackModel: Model<Stack>,
  ) {}

  async create(userId: string, createStackDto: CreateStackDto) {
    //check if user exists
    await this.userService.getOne(userId);

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

  async getAll(queryParams: any, userId: string) {
    const { page, ...query } = queryParams;
    query.author = userId;

    if (page && parseInt(page) < 1) {
      throw new PageNumberTooLowException();
    }
    const totalStacks = await this.stackModel.countDocuments(query);
    const take = 4;
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
      .find(query, null, { skip, limit: take })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      })
      .then((data) => {
        const stacks = data.map((stack) => {
          return {
            ...stack,
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

  async delete(stackId: string, userId: string) {
    //check if stack exists
    const stack = await this.stackModel.findById(stackId);
    if (!stack) {
      throw new StackNotFound();
    }
    //check if user exists
    await this.userService.getOne(userId);
    //check if user is the author of the stack
    if (stack.author !== userId) throw new CannotDeleteStack();

    await this.cardService.deleteStack(stackId);
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

  async update(
    userId: string,
    stackId: string,
    updateStackDto: UpdateStackDto,
  ) {
    //check if stack exists
    const stack = await this.stackModel.findById(stackId);
    if (!stack) {
      throw new StackNotFound();
    }
    //check if user exists
    await this.userService.getOne(userId);
    //check if user is the author of the stack
    if (stack.author !== userId) throw new CannotUpdateStack();

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

  async search(term: string, userId: string) {
    //check if user exists
    await this.userService.getOne(userId);

    return await this.stackModel
      .find({
        author: userId,
        title: { $regex: term, $options: 'i' },
      })
      .limit(5)
      .exec()
      .catch((error) => {
        throw new InternalServerErrorException(error);
      })
      .then((data) => {
        if (data.length === 0) return '0 stacks found';
        return data;
      });
  }
}
