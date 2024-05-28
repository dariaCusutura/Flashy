import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { NameAlreadyUsedException } from './exceptions/name-already-used.exception';
import { EmailAlreadyRegisteredException } from './exceptions/email-already-registered.exception';
import { PasswordsDontMatchException } from './exceptions/passwords-dont-match.exception';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { InvalidEmailOrPasswordException } from './exceptions/invalid-email-or-password.exception';
import { JwtService } from '@nestjs/jwt';
import { Messages } from 'src/messages/messages.enum';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    //Checking if username is unique
    const user = await this.userService.findByName(signUpDto.name);
    if (user) throw new NameAlreadyUsedException();
    //Checking if email is already registered
    const email = await this.userService.findByEmail(signUpDto.email);
    if (email) throw new EmailAlreadyRegisteredException();
    //Checking if the password and the confirmation match
    if (signUpDto.password !== signUpDto.confirmPassword)
      throw new PasswordsDontMatchException();

    const createUserDto: CreateUserDto = {
      name: signUpDto.name,
      email: signUpDto.email,
      password: await bcrypt.hash(signUpDto.password, 10),
      stacks: [],
    };

    return this.userService.createUser(createUserDto);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    if (!user) throw new InvalidEmailOrPasswordException();
    if (!(await bcrypt.compare(signInDto.password, user.password))) {
      throw new InvalidEmailOrPasswordException();
    }

    const payload = {
      email: user.email,
      name: user.name,
      sub: user._id,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      message: Messages.LoggedIn,
    };
  }
}
