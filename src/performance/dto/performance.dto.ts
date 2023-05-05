export class PerformanceDto {
  readonly id: string;
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
