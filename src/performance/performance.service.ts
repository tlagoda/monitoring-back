import { PerformanceDto } from './dto/performance.dto';
import { PerformanceMapper } from './performance.mapper';
import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { v4 } from 'uuid';
import { UpdatePerformanceDto } from './dto/performance-update.dto';
import { PerformanceRepository } from './performance.repository';
import { Performance } from './schemas/performance.schema';
import { PerformanceFilterDto } from './dto/performance-filter.dto';

@Injectable()
export class PerformanceService {
  constructor(
    private readonly performanceRepository: PerformanceRepository,
    private readonly performanceMapper: PerformanceMapper,
  ) {}

  async getAll(): Promise<PerformanceDto[]> {
    const performances = await this.performanceRepository.find({});
    return performances.map((perf) => this.performanceMapper.toDto(perf));
  }

  async getFilters(filters: PerformanceFilterDto): Promise<PerformanceDto[]> {
    const performances = await this.performanceRepository.find(filters);
    return performances.map((perf) => this.performanceMapper.toDto(perf));
  }

  async createPerformance(
    performance: CreatePerformanceDto,
  ): Promise<Performance> {
    const totalWeight =
      performance.weight * performance.sets * performance.repetitions;

    return await this.performanceRepository.create({
      ...performance,
      totalWeight,
      id: v4(),
    });
  }

  async delete(id: string): Promise<PerformanceDto> {
    const deletedPerf = await this.performanceRepository.findByIdAndRemove(id);
    return this.performanceMapper.toDto(deletedPerf);
  }

  updatePerformance(id: string, fieldsToUpdate: UpdatePerformanceDto) {
    console.log(`update performance #${id}`);
    return 'a';
  }
}
