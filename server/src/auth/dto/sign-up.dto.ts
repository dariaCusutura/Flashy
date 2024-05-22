import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  MaxLength,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsEmail({}, { message: 'Email format is invalid' })
  @MaxLength(50, { message: 'Email cannot be longer than 50 characters' })
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(3, { message: 'Name must be longer than 3 characters' })
  @MaxLength(30, { message: 'Name cannot be longer than 30 characters' })
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(30, { message: 'Password cannot be longer than 30 characters' })
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Please confirm your password' })
  @ApiProperty()
  confirmPassword: string;
}
