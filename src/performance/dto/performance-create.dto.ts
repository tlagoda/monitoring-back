import { IsNotEmpty, IsDefined, IsPositive, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePerformanceDto {
  @IsNotEmpty()
  @IsDefined()
  @Transform(({ value }) => new Date(value))
  readonly date: string;

  @IsNotEmpty()
  @IsDefined()
  readonly userInternalid: string;

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

  @IsOptional()
  readonly muscles?: string[];

  @IsOptional()
  readonly comments?: string;
}
