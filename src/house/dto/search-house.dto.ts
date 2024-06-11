/* eslint-disable prettier/prettier */
export class SearchHousesDto {
  latitude: number;
  longitude: number;
  maxDistance?: number; // optional field to specify max search distance in meters
}
