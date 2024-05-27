import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
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
  @IsNotEmpty({ message: 'Current password is required' })
  @ApiProperty()
  currentPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @IsNotEmpty({ message: 'New password is required' })
  @ApiProperty()
  newPassword: string;
}
