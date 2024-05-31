import { Module, forwardRef } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './card.schema';
import { UsersModule } from 'src/users/users.module';
import { StacksModule } from 'src/stacks/stacks.module';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
    forwardRef(() => UsersModule),
    forwardRef(() => StacksModule),
  ],
  exports: [CardsService],
})
export class CardsModule {}
