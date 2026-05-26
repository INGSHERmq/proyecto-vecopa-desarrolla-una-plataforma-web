import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePaymentDto } from '../../common/dto/create-payment.dto';
import { Payment, PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.prisma.$transaction(async (tx) => {
      // Get order
      const order = await tx.order.findUnique({
        where: { id: createPaymentDto.orderId },
        include: { items: true },
      });

      if (!order) {
        throw new Error('Order not found');
      }

      // Create payment
      const payment = await tx.payment.create({
        data: createPaymentDto,
      });

      // Update order status if payment is completed
      if (createPaymentDto.status === PaymentStatus.COMPLETED) {
        await tx.order.update({
          where: { id: createPaymentDto.orderId },
          data: { status: 'COMPLETED' },
        });
      }

      return payment;
    });
  }

  async findAll(): Promise<Payment[]> {
    return this.prisma.payment.findMany({
      include: { order: true },
    });
  }

  async findOne(id: string): Promise<Payment | null> {
    return this.prisma.payment.findUnique({
      where: { id },
      include: { order: true },
    });
  }
}