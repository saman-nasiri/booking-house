/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House, HouseDocument } from './schemas/house.schema';
import { CreateHouseDto } from './dto/create-house.dto';
import { SearchHousesDto } from './dto/search-house.dto';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const { userId, latitude, longitude, price } = createHouseDto;
    const newHouse = new this.houseModel({
      userId,
      type: 'Point',
      coordinates: [longitude, latitude],
      price,
    });
    return newHouse.save();
  }

  async findAll(): Promise<House[]> {
    return this.houseModel.find().exec();
  }

  async findOne(id: string): Promise<House> {
    const house = await this.houseModel.findById(id).exec();
    if (!house) {
      throw new NotFoundException(`House with ID ${id} not found`);
    }
    return house;
  }

  async search(searchHousesDto: SearchHousesDto): Promise<House[]> {
    const { latitude, longitude, maxDistance = 10000 } = searchHousesDto; // default max distance is 10 km

    return this.houseModel.find({
      coordinates: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: maxDistance,
        },
      },
    }).exec();
  }
}
