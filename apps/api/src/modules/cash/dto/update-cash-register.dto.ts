import { IsNumber, IsOptional } from 'class-validator';

export class UpdateCashRegisterDto {
  @IsOptional()
  @IsNumber()
  closingAmount?: number;
}