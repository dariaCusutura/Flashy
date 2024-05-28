import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCardDto } from './create-card.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @IsString()
  @IsNotEmpty({ message: 'Question is required' })
  @IsOptional()
  @ApiPropertyOptional()
  question?: string;

  @IsString()
  @IsNotEmpty({ message: 'Answer is required' })
  @IsOptional()
  @ApiPropertyOptional()
  answer?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  label?: string;
}
