import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  tableId: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsNumber()
  total?: number;
}