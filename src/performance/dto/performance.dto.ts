export class PerformanceDto {
  readonly internalId: string;
  readonly userInternalId: string;
  readonly date: Date;
  readonly exercise: string;
  readonly sets: number;
  readonly repetitions: number;
  readonly restTime: number;
  readonly weight: number;
  readonly totalWeight: number;
  readonly muscles?: string[];
  readonly comments: string;
}
