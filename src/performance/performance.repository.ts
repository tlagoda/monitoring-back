import { Performance, PerformanceDocument } from './schemas/performance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class PerformanceRepository {
  constructor(
    @InjectModel(Performance.name)
    private performanceModel: Model<PerformanceDocument>,
  ) {}

  async findOne(
    performanceFilterQuery: FilterQuery<Performance>,
  ): Promise<Performance> {
    return this.performanceModel.findOne(performanceFilterQuery);
  }

  async find(
    performancesFilterQuery: FilterQuery<Performance>,
  ): Promise<Performance[]> {
    return this.performanceModel.find(performancesFilterQuery);
  }

  async create(performance: Performance): Promise<Performance> {
    const newPerformance = new this.performanceModel(performance);
    return newPerformance.save();
  }

  async findOneAndUpdate(
    performanceFilterQuery: FilterQuery<Performance>,
    performance: Partial<Performance>,
  ): Promise<Performance> {
    return this.performanceModel.findOneAndUpdate(
      performanceFilterQuery,
      performance,
    );
  }
}
