import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class PageNumberTooHighException extends HttpException {
  constructor() {
    super(ErrorMessages.PageNumberTooHigh, HttpStatus.BAD_REQUEST);
  }
}
