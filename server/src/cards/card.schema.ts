import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Card {
  @Prop({
    required: [true, 'Question is required'],
  })
  question: string;

  @Prop({
    required: [true, 'Answer is required'],
  })
  answer: string;

  @Prop({ required: false, default: '' })
  label?: string;

  @Prop({ type: Types.ObjectId, ref: 'Stack', required: true })
  stack: Types.ObjectId;
}

export const CardSchema = SchemaFactory.createForClass(Card);
