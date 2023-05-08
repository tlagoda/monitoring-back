import { IsPositive, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePerformanceDto {
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  readonly date?: string;

  @IsOptional()
  readonly exercise?: string;

  @IsOptional()
  @IsPositive()
  readonly sets?: number;

  @IsOptional()
  @IsPositive()
  readonly repetitions?: number;

  @IsOptional()
  @IsPositive()
  readonly restTime?: number;

  @IsOptional()
  @IsPositive()
  readonly weight?: number;

  readonly muscles: string[];

  readonly comments: string;
}
