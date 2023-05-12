import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongooseTimestamp from 'mongoose-timestamp';

export type PerformanceDocument = Performance & Document;

@Schema({ collection: 'performances' })
export class Performance {
  @Prop()
  internalId: string;

  @Prop()
  date: string;

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
  muscles?: string[];

  @Prop()
  comments?: string;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
PerformanceSchema.plugin(mongooseTimestamp);
