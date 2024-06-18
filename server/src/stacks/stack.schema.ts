import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Stack {
  @Prop({
    required: [true, 'Title is required'],
    maxLength: [20, 'Title cannot be longer than 20 characters'],
  })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: string;

  @Prop({ required: false, default: false })
  saved: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Card' }], default: [] })
  cards: string[];
}

export const StackSchema = SchemaFactory.createForClass(Stack);
