/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  async findAll() {
    return this.houseService.findAll();
  }
  
  @Get('search')
  async searchHouses(@Query('latitude') latitude: number, @Query('longitude') longitude: number) {
    return this.houseService.searchByLocation(latitude, longitude);
  }

  @Post()
  async createHouse(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.createHouse(createHouseDto);
  }
}