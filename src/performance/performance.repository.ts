import { Performance, PerformanceDocument } from './schemas/performance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { UpdatePerformanceDto } from './dto/performance-update.dto';

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

  async updateByInternalId(
    internalId: string,
    fieldsToUpdate: UpdatePerformanceDto,
  ): Promise<Performance> {
    const updatedPerf = await this.performanceModel.findOneAndUpdate(
      { internalId },
      { $set: fieldsToUpdate },
      { new: true },
    );
    if (!updatedPerf) {
      throw new NotFoundException(
        `Performance with internal ID ${internalId} not found`,
      );
    }
    return updatedPerf;
  }

  async findByIdAndRemove(id: string): Promise<Performance> {
    return this.performanceModel.findByIdAndRemove(id);
  }
}
