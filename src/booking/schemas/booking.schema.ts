/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  guest_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  host_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'House', required: true })
  house_id: Types.ObjectId;

  @Prop({ required: true })
  total_price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
