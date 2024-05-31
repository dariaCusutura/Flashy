import { Module, forwardRef } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { StacksController } from './stacks.controller';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Stack, StackSchema } from './stack.schema';
import { CardsModule } from 'src/cards/cards.module';

@Module({
  controllers: [StacksController],
  providers: [StacksService],
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => CardsModule),
    MongooseModule.forFeature([{ name: Stack.name, schema: StackSchema }]),
  ],
  exports: [StacksService],
})
export class StacksModule {}
