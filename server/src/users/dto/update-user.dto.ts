import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
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
