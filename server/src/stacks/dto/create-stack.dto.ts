import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStackDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @ApiProperty()
  title: string;
}
