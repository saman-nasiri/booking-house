/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class House {
  @Prop()
  userId: string;

  @Prop({ type: { type: String, enum: ['Point'], default: 'Point' } })
  type: string;

  @Prop({ type: [Number], index: '2dsphere' })
  coordinates: number[];

  @Prop()
  price: number;
}

export type HouseDocument = House & Document;
export const HouseSchema = SchemaFactory.createForClass(House);
