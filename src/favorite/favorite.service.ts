/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite } from './schemas/favorite.schema';
import { AddFavoriteDto } from './dto/add-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(@InjectModel(Favorite.name) private favoriteModel: Model<Favorite>) {}

  async findAll(): Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }

  async addFavorite(addFavoriteDto: AddFavoriteDto): Promise<Favorite> {
    const newFavorite = new this.favoriteModel(addFavoriteDto);
    return newFavorite.save();
  }
}