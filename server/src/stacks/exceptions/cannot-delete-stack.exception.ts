import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class CannotDeleteStack extends HttpException {
  constructor() {
    super(ErrorMessages.CannotDeleteStack, HttpStatus.FORBIDDEN);
  }
}
