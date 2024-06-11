/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { SearchHousesDto } from './dto/search-house.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.create(createHouseDto);
  }

  @Get()
  findAll() {
    return this.houseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.houseService.findOne(id);
  }

  @Get('search')
  search(@Query() searchHousesDto: SearchHousesDto) {
    return this.houseService.search(searchHousesDto);
  }
}
