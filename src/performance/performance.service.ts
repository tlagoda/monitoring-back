import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { v4 } from 'uuid';

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
}
