import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Messages } from 'src/messages/messages.enum';
import { ErrorMessages } from 'src/messages/error-messages.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: Messages.UserRegistered,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ErrorMessages.BadRequest,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.AccountDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.UserNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotDeleteAccount,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  deleteUser(@Request() req, @Param('id') id: string) {
    const userId = req.user.sub;
    return this.usersService.deleteUser(id, userId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.AccountUpdated,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.UserNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotUpdateAccount,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  updateUser(
    @Request() req,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, req.user.sub, updateUserDto);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.UserFound,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.UserNotFound,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  getOne(@Param('id') id: string) {
    return this.usersService.getOne(id);
  }
}
