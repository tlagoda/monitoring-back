import { Module } from '@nestjs/common';
import { HistoricController } from './historic.controller';
import { HistoricService } from './historic.service';

@Module({
  controllers: [HistoricController],
  providers: [HistoricService],
})
export class HistoricModule {}
