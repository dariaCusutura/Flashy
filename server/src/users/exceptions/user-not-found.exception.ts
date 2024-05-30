import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class UserNotFoundException extends HttpException {
  constructor() {
    super(ErrorMessages.UserNotFound, HttpStatus.NOT_FOUND);
  }
}
