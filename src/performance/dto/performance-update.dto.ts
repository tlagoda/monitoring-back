import { Optional } from '@nestjs/common';
import { IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePerformanceDto {
  @Optional()
  @Transform(({ value }) => new Date(value))
  readonly date?: string;

  @Optional()
  readonly exercise?: string;

  @Optional()
  @IsPositive()
  readonly sets?: number;

  @Optional()
  @IsPositive()
  readonly repetitions?: number;

  @Optional()
  @IsPositive()
  readonly restTime?: number;

  @Optional()
  @IsPositive()
  readonly weight?: number;

  readonly muscles: string[];

  readonly comments: string;
}
