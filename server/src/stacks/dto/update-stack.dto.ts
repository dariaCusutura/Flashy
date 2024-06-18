import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateStackDto } from './create-stack.dto';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateStackDto extends PartialType(CreateStackDto) {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(20, { message: 'Title cannot be longer than 20 characters' })
  @IsOptional()
  @ApiPropertyOptional()
  title: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  saved: boolean;
}
