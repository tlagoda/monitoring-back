import { Injectable } from '@nestjs/common';
import { Performance } from './schemas/performance.schema';
import { PerformanceDto } from './dto/performance.dto';

@Injectable()
export class PerformanceMapper {
  toDto(performance: Performance): PerformanceDto {
    const {
      internalId,
      userInternalId,
      date,
      exercise,
      sets,
      repetitions,
      restTime,
      weight,
      totalWeight,
      muscles,
      comments,
    } = performance;

    return {
      internalId,
      userInternalId,
      date: new Date(date),
      exercise,
      sets,
      repetitions,
      restTime,
      weight,
      totalWeight,
      muscles,
      comments,
    };
  }
}
