import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceController } from './performance/performance.controller';
import { PerformanceService } from './performance/performance.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, PerformanceController],
  providers: [AppService, PerformanceService],
})
export class AppModule {}
