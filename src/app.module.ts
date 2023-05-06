import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceController } from './performance/performance.controller';
import { PerformanceService } from './performance/performance.service';

@Module({
  controllers: [AppController, PerformanceController],
  providers: [AppService, PerformanceService],
})
export class AppModule {}
