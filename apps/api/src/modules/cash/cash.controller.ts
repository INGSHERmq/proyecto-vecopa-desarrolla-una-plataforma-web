import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CashService } from './cash.service';
import { CreateCashRegisterDto } from './dto/create-cash-register.dto';
import { UpdateCashRegisterDto } from './dto/update-cash-register.dto';

@Controller('cash')
export class CashController {
  constructor(private readonly cashService: CashService) {}

  @Post()
  create(@Body() createCashRegisterDto: CreateCashRegisterDto) {
    return this.cashService.create(createCashRegisterDto);
  }

  @Get()
  findAll() {
    return this.cashService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashService.findOne(id);
  }

  @Patch(':id/close')
  close(@Param('id') id: string, @Body() updateCashRegisterDto: UpdateCashRegisterDto) {
    return this.cashService.close(id, updateCashRegisterDto.closingAmount);
  }
}