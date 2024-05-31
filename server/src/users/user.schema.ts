import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class User {
  @Prop({
    required: [true, 'Email is required'],
    unique: true,
  })
  email: string;

  @Prop({
    required: [true, 'Name is required'],
    unique: true,
    minLength: [3, 'Name must be at least 3 characters long'],
    maxLength: [30, 'Name cannot be longer than 30 characters'],
  })
  name: string;

  @Prop({
    required: [true, 'Password is required'],
    minLength: [8, 'Password must be at least 8 characters long'],
  })
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Stack' }] })
  stacks: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
