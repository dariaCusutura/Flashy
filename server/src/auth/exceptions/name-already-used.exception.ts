import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class NameAlreadyUsedException extends HttpException {
  constructor() {
    super(ErrorMessages.NameAlreadyUsed, HttpStatus.BAD_REQUEST);
  }
}
