/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
  HOST = 'host',
  GUEST = 'guest',
  BOTH = 'both',
}

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  profile_photo: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true, enum: UserRole })
  role: UserRole;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
