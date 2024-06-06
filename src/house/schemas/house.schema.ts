/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class House {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  price: number;
}

export type HouseDocument = House & Document;
export const HouseSchema = SchemaFactory.createForClass(House);
