import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from '@prisma/client';

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService) {}

  async create(createTableDto: CreateTableDto): Promise<Table> {
    return this.prisma.table.create({
      data: createTableDto,
    });
  }

  async findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findOne(id: string): Promise<Table | null> {
    return this.prisma.table.findUnique({
      where: { id },
      include: { orders: true },
    });
  }

  async update(id: string, updateTableDto: UpdateTableDto): Promise<Table> {
    return this.prisma.table.update({
      where: { id },
      data: updateTableDto,
    });
  }

  async remove(id: string): Promise<Table> {
    return this.prisma.table.delete({
      where: { id },
    });
  }
}