import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsDefined, IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePerformanceDto {
  @IsNotEmpty()
  @IsDefined()
  @Transform(({ value }) => new Date(value))
  readonly date: string;

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
