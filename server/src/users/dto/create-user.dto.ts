import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty()
  email: string;

  @IsString()
  @Length(3, 30, { message: 'Name must be between 3 and 30 characters long' })
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty()
  password: string;

  @IsArray()
  @IsMongoId({ each: true })
  @ApiProperty()
  stacks: string[];
}
