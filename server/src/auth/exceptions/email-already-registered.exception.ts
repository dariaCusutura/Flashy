import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class EmailAlreadyRegisteredException extends HttpException {
  constructor() {
    super(ErrorMessages.EmailAlreadyRegistered, HttpStatus.BAD_REQUEST);
  }
}
