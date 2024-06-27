import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty({ message: 'Question is required' })
  @ApiProperty()
  question: string;

  @IsString()
  @IsNotEmpty({ message: 'Answer is required' })
  @ApiProperty()
  answer: string;

  @IsNotEmpty({ message: 'Stack is required' })
  @IsString()
  @IsMongoId()
  @ApiProperty()
  stack: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  label: string;
}
