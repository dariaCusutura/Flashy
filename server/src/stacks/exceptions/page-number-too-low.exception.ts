import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class PageNumberTooLowException extends HttpException {
  constructor() {
    super(ErrorMessages.PageNumberTooLow, HttpStatus.BAD_REQUEST);
  }
}
