import { Injectable } from '@nestjs/common';
import { CreatePerformanceDto } from './dto/performance-create.dto';
import { v4 } from 'uuid';

@Injectable()
export class PerformanceService {
  private readonly performances = [];

  getPerformances() {
    return this.performances;
  }

  create(performance: CreatePerformanceDto) {
    this.performances.push({ ...performance, id: v4() });
  }
}
