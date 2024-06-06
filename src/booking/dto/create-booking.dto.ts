/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  guest_id: string;

  @IsString()
  host_id: string;

  @IsString()
  house_id: string;

  @IsNumber()
  total_price: number;
}
