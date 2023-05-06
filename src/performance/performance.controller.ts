import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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
  createPerformance(@Body() performance: CreatePerformanceDto) {
    return this.performanceService.createPerformance(performance);
  }

  @Delete(':id')
  deletePerformance(@Param('id') id: string) {
    return this.performanceService.deletePerformance(id);
  }
}
