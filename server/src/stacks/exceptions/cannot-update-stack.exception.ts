import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessages } from 'src/messages/error-messages.enum';

export class CannotUpdateStack extends HttpException {
  constructor() {
    super(ErrorMessages.CannotUpdateStack, HttpStatus.FORBIDDEN);
  }
}
