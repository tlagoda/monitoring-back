import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance.dto';

@Injectable()
export class PerformanceService {
  private readonly performances = [];

  getPerformances() {
    return this.performances;
  }

  create(performance: CreatePerformanceDto) {
    this.performances.push(performance);
  }
}
