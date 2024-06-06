/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateHouseDto {
  @IsString()
  user_id: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  price: number;
}
