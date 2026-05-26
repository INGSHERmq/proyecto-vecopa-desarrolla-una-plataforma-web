import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderDto } from '../../common/dto/create-order.dto';
import { CreateOrderItemDto } from '../../common/dto/create-order-item.dto';
import { Order, OrderStatus, Table } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.prisma.$transaction(async (tx) => {
      // Check if table is available
      const table = await tx.table.findUnique({
        where: { id: createOrderDto.tableId },
      });

      if (!table || table.status !== 'AVAILABLE') {
        throw new Error('Table is not available');
      }

      // Update table status
      await tx.table.update({
        where: { id: createOrderDto.tableId },
        data: { status: 'OCCUPIED' },
      });

      // Create order
      const order = await tx.order.create({
        data: {
          tableId: createOrderDto.tableId,
          userId: createOrderDto.userId,
          status: OrderStatus.PENDING,
        },
      });

      return order;
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: {
        table: true,
        user: true,
        items: {
          include: { product: true },
        },
      },
    });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        table: true,
        user: true,
        items: {
          include: { product: true },
        },
      },
    });
  }

  async updateStatus(id: string, status: OrderStatus): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  async addOrderItems(id: string, items: CreateOrderItemDto[]): Promise<Order> {
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id },
        include: { items: true },
      });

      if (!order) {
        throw new Error('Order not found');
      }

      // Calculate total and create order items
      let total = 0;
      const orderItemsData = items.map((item) => {
        total += item.price * item.quantity;
        return {
          orderId: id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        };
      });

      // Create order items
      await tx.orderItem.createMany({
        data: orderItemsData,
      });

      // Update order total
      await tx.order.update({
        where: { id },
        data: { total },
      });

      return this.findOne(id);
    });
  }
}