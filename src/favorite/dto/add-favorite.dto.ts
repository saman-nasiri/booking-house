/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class AddFavoriteDto {
  @IsString()
  user_id: string;

  @IsString()
  house_id: string;
}
