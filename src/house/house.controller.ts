/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  async createHouse(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.createHouse(createHouseDto);
  }

  @Get()
  async findAll() {
    return this.houseService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.houseService.findById(id);
  }

  @Get('search')
  async searchHouses(@Query('latitude') latitude: number, @Query('longitude') longitude: number) {
    return this.houseService.searchHouses(latitude, longitude);
  }
}
