export class CreatePerformanceDto {
  readonly date: string;
  readonly exercise: string;
  readonly sets: number;
  readonly repetitions: number;
  readonly weight: number;
  readonly muscles?: string[];
  readonly comments: string;
}
