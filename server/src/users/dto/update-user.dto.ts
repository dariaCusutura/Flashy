import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Current password is required' })
  @MaxLength(30)
  @ApiProperty()
  currentPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'New password is required' })
  @MinLength(8, {
    message: 'The new password must be at least 8 characters long',
  })
  @MaxLength(30)
  @ApiProperty()
  newPassword: string;
}
