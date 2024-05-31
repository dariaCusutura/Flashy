import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StacksModule } from 'src/stacks/stacks.module';
import { CardsModule } from 'src/cards/cards.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => StacksModule),
    forwardRef(() => CardsModule),
  ],
  providers: [UsersService],
  controllers: [UsersController],

  exports: [UsersService],
})
export class UsersModule {}
