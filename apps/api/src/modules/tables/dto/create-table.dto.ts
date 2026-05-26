import { IsInt, IsEnum } from 'class-validator';
import { TableStatus } from '@prisma/client';

export class CreateTableDto {
  @IsInt()
  number: number;

  @IsInt()
  capacity: number;

  @IsEnum(TableStatus)
  status: TableStatus;
}