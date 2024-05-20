import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/')],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
