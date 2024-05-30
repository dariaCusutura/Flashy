import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './card.schema';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async deleteStack(stackId: string) {
    return await this.cardModel.deleteMany({ stack: stackId }).catch((err) => {
      console.log('cards.service: delete stack error');
      throw new Error(err.message);
    });
  }
}
