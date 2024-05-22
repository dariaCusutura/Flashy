import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  MaxLength,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @IsEmail({}, { message: 'Email format is invalid' })
  @MaxLength(50, { message: 'Email cannot be longer than 50 characters' })
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(30, { message: 'Password cannot be longer than 30 characters' })
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty()
  password: string;
}
