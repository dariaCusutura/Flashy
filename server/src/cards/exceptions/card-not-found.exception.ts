import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class CardNotFoundException extends HttpException {
  constructor() {
    super(ErrorMessages.CardNotFound, HttpStatus.NOT_FOUND);
  }
}
