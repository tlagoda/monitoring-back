import { PerformanceController } from './performance.controller';
import { PerformanceSchema } from './schemas/performance.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Performance } from './schemas/performance.schema';
import { PerformanceService } from './performance.service';
import { PerformanceRepository } from './performance.repository';
import { PerformanceMapper } from './performance.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Performance.name, schema: PerformanceSchema },
    ]),
  ],
  controllers: [PerformanceController],
  providers: [PerformanceService, PerformanceRepository, PerformanceMapper],
})
export class PerformanceModule {}
