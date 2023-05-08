import { IsDateString, IsOptional, IsNumber, IsString } from 'class-validator';

export class PerformanceFilterDto {
  @IsOptional()
  @IsString()
  readonly internalId?: string;

  @IsOptional()
  @IsDateString()
  readonly date?: string;

  @IsOptional()
  @IsString()
  readonly exercise?: string;

  @IsOptional()
  @IsNumber()
  readonly sets?: number;

  @IsOptional()
  @IsNumber()
  readonly repetitions?: number;

  @IsOptional()
  @IsNumber()
  readonly restTime?: number;

  @IsOptional()
  @IsNumber()
  readonly weight?: number;

  @IsOptional()
  @IsNumber()
  readonly totalWeight?: number;

  @IsOptional()
  @IsString({ each: true })
  readonly muscles?: string[];
}
