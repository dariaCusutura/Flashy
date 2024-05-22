import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class InvalidEmailOrPasswordException extends HttpException {
  constructor() {
    super(ErrorMessages.InvalidEmailOrPassword, HttpStatus.BAD_REQUEST);
  }
}
