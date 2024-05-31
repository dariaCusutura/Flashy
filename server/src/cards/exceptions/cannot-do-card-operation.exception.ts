import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class CannotDoCardOperationException extends HttpException {
  constructor() {
    super(ErrorMessages.Unauthorized, HttpStatus.FORBIDDEN);
  }
}
