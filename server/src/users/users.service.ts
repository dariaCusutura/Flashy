import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CannotDeleteAccountException } from './exceptions/cannot-delete-account.exception';
import { Messages } from 'src/messages/messages.enum';
import { CannotUpdateAccountException } from './exceptions/cannot-update-account.exception';
import * as bcrypt from 'bcrypt';
import { WrongPasswordException } from './exceptions/wrong-password.exception';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //create a new user
  async createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return { message: 'User registered successfully' };
  }

  //find by name
  async findByName(name: string) {
    return await this.userModel.findOne({ name: name });
  }
  //find by email
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  //delete user
  async deleteUser(id: string, userId: string) {
    if (id !== userId) throw new CannotDeleteAccountException();
    return await this.userModel
      .findByIdAndDelete(id)
      .catch((error) => {
        throw new Error(error.message);
      })
      .then(() => {
        return { message: Messages.AccountDeleted };
      });
  }

  //update user
  async updateUser(id: string, userId: string, updateUserDto: UpdateUserDto) {
    if (id !== userId) throw new CannotUpdateAccountException();
    const user = await this.userModel.findById(userId).catch((error) => {
      throw new Error(error.message);
    });
    if (!(await bcrypt.compare(updateUserDto.currentPassword, user.password))) {
      throw new WrongPasswordException();
    }
    return await this.userModel
      .findByIdAndUpdate(id, {
        password: await bcrypt.hash(updateUserDto.newPassword, 10),
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .then(() => {
        return { message: Messages.AccountUpdated };
      });
  }

  //get by id
  async getOne(id: string) {
    return await this.userModel
      .findById(id)
      .catch((error) => {
        throw new Error(error.message);
      })
      .then((data) => {
        return { data, message: Messages.UserFound };
      });
  }
}
