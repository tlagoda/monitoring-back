import { PerformanceDto } from './dto/performance.dto';
import { UpdatePerformanceDto } from './dto/performance-update.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { PerformanceFilterDto } from './dto/performance-filter.dto';

@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get()
  async getAll(): Promise<PerformanceDto[]> {
    try {
      const allPerformances = await this.performanceService.getAll();
      return allPerformances;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/filters')
  async getFilters(
    @Body() filters: PerformanceFilterDto,
  ): Promise<PerformanceDto[]> {
    try {
      const performances = await this.performanceService.getFilters(filters);
      return performances;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post()
  async createPerformance(
    @Body() performance: CreatePerformanceDto,
    @Res() res,
  ) {
    try {
      const createdPerformance =
        await this.performanceService.createPerformance(performance);
      return res.status(HttpStatus.CREATED).json(createdPerformance);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to create performance',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deletePerformance(@Param('id') id: string): Promise<PerformanceDto> {
    try {
      return await this.performanceService.delete(id);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Patch(':id')
  updatePerformance(
    @Param('id') id: string,
    @Body() fieldsToUpdate: UpdatePerformanceDto,
  ) {
    return this.performanceService.updatePerformance(id, fieldsToUpdate);
  }
}
