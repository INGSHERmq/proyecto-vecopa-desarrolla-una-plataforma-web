import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('sales')
  getSalesReport(@Query('startDate') startDate: string, @Query('endDate') endDate: string) {
    return this.reportsService.getSalesReport(new Date(startDate), new Date(endDate));
  }

  @Get('popular-products')
  getPopularProducts(@Query('limit') limit: number = 10) {
    return this.reportsService.getPopularProducts(limit);
  }
}