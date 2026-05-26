import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateCashRegisterDto } from './dto/create-cash-register.dto';
import { UpdateCashRegisterDto } from './dto/update-cash-register.dto';
import { CashRegister, CashRegisterStatus } from '@prisma/client';

@Injectable()
export class CashService {
  constructor(private prisma: PrismaService) {}

  async create(createCashRegisterDto: CreateCashRegisterDto): Promise<CashRegister> {
    return this.prisma.cashRegister.create({
      data: {
        ...createCashRegisterDto,
        status: CashRegisterStatus.OPEN,
      },
    });
  }

  async findAll(): Promise<CashRegister[]> {
    return this.prisma.cashRegister.findMany({
      include: { payments: true },
    });
  }

  async findOne(id: string): Promise<CashRegister | null> {
    return this.prisma.cashRegister.findUnique({
      where: { id },
      include: { payments: true },
    });
  }

  async close(id: string, closingAmount: number): Promise<CashRegister> {
    return this.prisma.$transaction(async (tx) => {
      // Calculate total payments
      const payments = await tx.payment.findMany({
        where: { cashRegisterId: id },
      });

      const totalPayments = payments.reduce((sum, payment) => sum + payment.amount, 0);

      // Update cash register
      return tx.cashRegister.update({
        where: { id },
        data: {
          closingAmount,
          status: CashRegisterStatus.CLOSED,
        },
      });
    });
  }
}