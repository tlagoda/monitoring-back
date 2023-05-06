import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsDefined, IsPositive } from 'class-validator';

export class CreatePerformanceDto {
  @IsNotEmpty()
  @IsDefined()
  readonly date: Date;

  @IsNotEmpty()
  @IsDefined()
  readonly exercise: string;

  @IsDefined()
  @IsPositive()
  readonly sets: number;

  @IsDefined()
  @IsPositive()
  readonly repetitions: number;

  @IsDefined()
  @IsPositive()
  readonly restTime: number;

  @IsDefined()
  @IsPositive()
  readonly weight: number;

  @Optional()
  readonly muscles?: string[];

  @Optional()
  readonly comments?: string;
}
