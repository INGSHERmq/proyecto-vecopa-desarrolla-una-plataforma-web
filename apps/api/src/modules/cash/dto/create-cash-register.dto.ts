import { IsNumber, IsString } from 'class-validator';

export class CreateCashRegisterDto {
  @IsString()
  userId: string;

  @IsNumber()
  openingAmount: number;
}