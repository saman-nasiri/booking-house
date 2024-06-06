/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House } from './schemas/house.schema';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HouseService {
  constructor(@InjectModel(House.name) private houseModel: Model<House>) {}

  async findAll(): Promise<House[]> {
    return this.houseModel.find().exec();
  }
  
  async searchByLocation(latitude: number, longitude: number): Promise<House[]> {
    return this.houseModel.find({ latitude, longitude }).exec();
  }

  async createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    const newHouse = new this.houseModel(createHouseDto);
    return newHouse.save();
  }
}
