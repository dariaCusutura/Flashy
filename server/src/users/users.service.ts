import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

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
}
