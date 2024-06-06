/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './schemas/favorite.schema';
import { User, UserDocument } from '../user/schemas/user.schema';
import { House, HouseDocument } from '../house/schemas/house.schema';
import { AddFavoriteDto } from './dto/add-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(House.name) private houseModel: Model<HouseDocument>
  ) {}

  async addFavorite(addFavoriteDto: AddFavoriteDto): Promise<Favorite> {
    const { userId, houseId } = addFavoriteDto;

    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const house = await this.houseModel.findById(houseId);
    if (!house) {
      throw new NotFoundException(`House with ID ${houseId} not found`);
    }

    const existingFavorite = await this.favoriteModel.findOne({ userId, houseId });
    if (existingFavorite) {
      throw new BadRequestException('This house is already in favorites');
    }

    const favorite = new this.favoriteModel({
      userId,
      houseId,
    });
    return favorite.save();
  }

  async findAll(): Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }
}
