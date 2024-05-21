import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
