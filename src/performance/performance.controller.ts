import { Controller, Get, Post, Body } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { CreatePerformanceDto } from './dto/performance-create.dto';

@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get()
  async getPerformances() {
    return this.performanceService.getPerformances();
  }

  @Post()
  create(@Body() performance: CreatePerformanceDto) {
    return this.performanceService.create(performance);
  }
}
