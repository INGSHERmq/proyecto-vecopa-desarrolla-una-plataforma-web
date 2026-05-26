import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { TableStatus } from '@prisma/client';

export class UpdateTableDto {
  @IsOptional()
  @IsInt()
  number?: number;

  @IsOptional()
  @IsInt()
  capacity?: number;

  @IsOptional()
  @IsEnum(TableStatus)
  status?: TableStatus;
}