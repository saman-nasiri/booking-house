/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { AddFavoriteDto } from './dto/add-favorite.dto';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  async findAll() {
    return this.favoriteService.findAll();
  }

  @Post()
  async addFavorite(@Body() addFavoriteDto: AddFavoriteDto) {
    return this.favoriteService.addFavorite(addFavoriteDto);
  }
}