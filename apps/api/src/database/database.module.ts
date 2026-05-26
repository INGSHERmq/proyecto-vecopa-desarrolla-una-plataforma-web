import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module';
import { CommonModule } from './common.module';

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}