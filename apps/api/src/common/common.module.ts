import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TablesModule } from './tables/tables.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    TablesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class CommonModule {}