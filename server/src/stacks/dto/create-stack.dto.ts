import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateStackDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @ApiProperty()
  title: string;

  @IsNotEmpty({ message: 'Stack is required' })
  @IsString()
  @IsMongoId()
  @ApiProperty()
  author: string;

  @IsArray()
  @IsMongoId({ each: true })
  @ApiProperty()
  cards: string[];

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value ?? false)
  @ApiProperty()
  saved: boolean;
}
