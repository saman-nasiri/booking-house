/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { House, HouseSchema } from './schemas/house.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }])],
  providers: [HouseService],
  controllers: [HouseController],
  exports: [MongooseModule],  // Export MongooseModule so that House model can be used in other modules
})
export class HouseModule {}
