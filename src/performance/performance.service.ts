import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { v4 } from 'uuid';
import { UpdatePerformanceDto } from './dto/performance-update.dto';
import { PerformanceRepository } from './performance.repository';
import { Performance } from './schemas/performance.schema';

@Injectable()
export class PerformanceService {
  private readonly performances = [];
  constructor(private readonly performanceRepository: PerformanceRepository) {}

  getPerformances() {
    return this.performanceRepository.find({});
  }

  createPerformance(performance: CreatePerformanceDto): Promise<Performance> {
    const totalWeight =
      performance.weight * performance.sets * performance.repetitions;

    return this.performanceRepository.create({
      ...performance,
      totalWeight,
      id: v4(),
    });
  }

  deletePerformance(id: string) {
    console.log(`delete performance #${id}`);
  }

  updatePerformance(id: string, fieldsToUpdate: UpdatePerformanceDto) {
    console.log(`update performance #${id}`);
    return 'a';
  }
}
