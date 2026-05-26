import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TablesModule } from './modules/tables/tables.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CashModule } from './modules/cash/cash.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CommonModule,
    ProductsModule,
    CategoriesModule,
    TablesModule,
    UsersModule,
    OrdersModule,
    PaymentsModule,
    CashModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}