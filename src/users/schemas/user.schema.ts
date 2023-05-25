import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongooseTimestamp from 'mongoose-timestamp';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  internalId: string;

  @Prop({ unique: true })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  totalWeight: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseTimestamp);
