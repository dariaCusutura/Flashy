import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateStackDto } from './create-stack.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStackDto extends PartialType(CreateStackDto) {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @IsOptional()
  @ApiPropertyOptional()
  title: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  saved: boolean;
}
