import { Controller, Get } from '@nestjs/common';
import { HistoricService } from './historic.service';

@Controller('historic')
export class HistoricController {
  @Get()
  getHistoric(): any[] {
    return HistoricService.getHistoric();
  }
}
