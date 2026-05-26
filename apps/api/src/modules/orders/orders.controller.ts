import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from '../../common/dto/create-order.dto';
import { CreateOrderItemDto } from '../../common/dto/create-order-item.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.ordersService.updateStatus(id, status as any);
  }

  @Post(':id/items')
  addOrderItems(@Param('id') id: string, @Body() items: CreateOrderItemDto[]) {
    return this.ordersService.addOrderItems(id, items);
  }
}