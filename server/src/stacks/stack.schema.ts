import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Stack {
  @Prop({
    required: [true, 'Ttile is required'],
  })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: string;

  @Prop({ required: false })
  saved?: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Card' }] })
  cards: Types.ObjectId[];
}

export const StackSchema = SchemaFactory.createForClass(Stack);
