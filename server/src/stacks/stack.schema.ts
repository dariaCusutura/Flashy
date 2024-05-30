import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Stack {
  @Prop({
    required: [true, 'Title is required'],
  })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: string;

  @Prop({ required: false, default: false })
  saved: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Card' }], default: [] })
  cards: Types.ObjectId[];
}

export const StackSchema = SchemaFactory.createForClass(Stack);
