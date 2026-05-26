import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { TablesModule } from './modules/tables/tables.module';
import { CashModule } from './modules/cash/cash.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    TablesModule,
    CashModule,
    ReportsModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}