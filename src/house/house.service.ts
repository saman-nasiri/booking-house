/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House, HouseDocument } from './schemas/house.schema';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HouseService {
  constructor(@InjectModel(House.name) private houseModel: Model<HouseDocument>) {}

  async createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    const house = new this.houseModel(createHouseDto);
    return house.save();
  }

  async findAll(): Promise<House[]> {
    return this.houseModel.find().exec();
  }

  async findById(id: string): Promise<House> {
    const house = await this.houseModel.findById(id);
    if (!house) {
      throw new NotFoundException(`House with ID ${id} not found`);
    }
    return house;
  }

  async searchHouses(latitude: number, longitude: number): Promise<House[]> {
    return this.houseModel.find({
      latitude,
      longitude,
    }).exec();
  }
}
