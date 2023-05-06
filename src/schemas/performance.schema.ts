import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PerformanceDocument = HydratedDocument<Performance>;

@Schema()
export class Performance {
  @Prop()
  date: Date;

  @Prop()
  exercise: string;

  @Prop()
  sets: number;

  @Prop()
  repetitions: number;

  @Prop()
  restTime: number;

  @Prop()
  weight: number;

  @Prop()
  totalWeight: number;

  @Prop()
  muscles: string[];

  @Prop()
  comments: string;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
