import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoricService {
  static getHistoric(): any[] {
    const historic = [
      {
        date: '03/05/2023',
        series: 3,
        reps: 20,
        weight: 8,
      },
    ];
    return historic;
  }
}
