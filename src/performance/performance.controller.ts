import { UpdatePerformanceDto } from './dto/performance-update.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
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

  @Patch(':id')
  updatePerformance(
    @Param('id') id: string,
    @Body() fieldsToUpdate: UpdatePerformanceDto,
  ) {
    return this.performanceService.updatePerformance(id, fieldsToUpdate);
  }
}
