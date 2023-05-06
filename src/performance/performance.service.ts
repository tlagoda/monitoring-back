import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { v4 } from 'uuid';
import { UpdatePerformanceDto } from './dto/performance-update.dto';

@Injectable()
export class PerformanceService {
  private readonly performances = [];

  getPerformances() {
    return this.performances;
  }

  createPerformance(performance: CreatePerformanceDto) {
    const totalWeight =
      performance.weight * performance.sets * performance.repetitions;
    this.performances.push({ ...performance, id: v4(), totalWeight });
  }

  deletePerformance(id: string) {
    console.log(`delete performance #${id}`);
  }

  updatePerformance(id: string, fieldsToUpdate: UpdatePerformanceDto) {
    console.log(`update performance #${id}`);
    return 'a';
  }
}
