/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  guestId: string;

  @IsNotEmpty()
  @IsString()
  hostId: string;

  @IsNotEmpty()
  @IsString()
  houseId: string;

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;
}
