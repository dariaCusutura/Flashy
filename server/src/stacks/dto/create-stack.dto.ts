import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStackDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(20, { message: 'Title cannot be longer than 20 characters' })
  @ApiProperty()
  title: string;
}
