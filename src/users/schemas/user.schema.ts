import { Sexe } from './../interfaces/users.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongooseTimestamp from 'mongoose-timestamp';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  internalId: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  totalweight: number;

  @Prop()
  sexe?: Sexe;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseTimestamp);
