import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoricModule } from './historic/historic.module';

@Module({
  imports: [HistoricModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
