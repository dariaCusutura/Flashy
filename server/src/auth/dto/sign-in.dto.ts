import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(50, { message: 'Email cannot be longer than 50 characters' })
  @IsEmail({}, { message: 'Email format is invalid' })
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MaxLength(30, { message: 'Password cannot be longer than 30 characters' })
  @ApiProperty()
  password: string;
}
