export class CreatePerformanceDto {
  readonly date: Date;
  readonly exercise: string;
  readonly sets: number;
  readonly repetitions: number;
  readonly restTime: number;
  readonly weight: number;
  readonly muscles?: string[];
  readonly comments: string;
}
