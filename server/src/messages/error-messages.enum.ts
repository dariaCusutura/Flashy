export enum ErrorMessages {
  EmailAlreadyRegistered = 'Email already registered',
  InternalServerError = 'Internal Server Error',
  WrongPassword = 'Wrong password',
  PasswordsDontMatch = 'Passwords do not match',
  EmailNotFound = 'Email not found',
  NameAlreadyUsed = 'Username already registered',
  BadRequest = 'Bad Request',
  Unauthorized = 'Unauthorized',

  StackNotFound = 'Stack not found',
  CardNotFound = 'Card not found',

  UserNotFound = 'User not found',
  InvalidEmailOrPassword = 'Invalid email or password',
  CannotDeleteAccount = 'User can not delete this account',
  CannotUpdateAccount = 'User can not update this account',
  CannotDeleteStack = 'User can not delete this stack',
  CannotUpdateStack = 'User can not update this stack',

  PageNumberTooHigh = 'Page number exceeds the total number of pages',
  PageNumberTooLow = 'Page number is too low',
}
