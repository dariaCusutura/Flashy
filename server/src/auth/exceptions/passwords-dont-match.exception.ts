import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class PasswordsDontMatchException extends HttpException {
  constructor() {
    super(ErrorMessages.PasswordsDontMatch, HttpStatus.BAD_REQUEST);
  }
}
