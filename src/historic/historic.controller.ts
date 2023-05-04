import { Controller, Get } from '@nestjs/common';

@Controller('historic')
export class HistoricController {
  @Get()
  getHistoric(): string {
    return 'historic';
  }
}
