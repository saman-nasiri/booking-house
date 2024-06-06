/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking {
  @Prop({ required: true })
  guestId: string;

  @Prop({ required: true })
  hostId: string;

  @Prop({ required: true })
  houseId: string;

  @Prop({ required: true })
  totalPrice: number;
}

export type BookingDocument = Booking & Document;
export const BookingSchema = SchemaFactory.createForClass(Booking);
