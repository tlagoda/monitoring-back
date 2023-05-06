import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';

@Module({
  controllers: [PerformanceController],
  providers: [
    PerformanceService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({}),
    },
  ],
})
export class PerformanceModule {}
