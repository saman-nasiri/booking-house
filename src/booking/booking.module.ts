/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking, BookingSchema } from './schemas/booking.schema';
import { UserModule } from '../user/user.module';  // Import UserModule
import { HouseModule } from '../house/house.module';  // Import HouseModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    UserModule,  // Include UserModule
    HouseModule,  // Include HouseModule
  ],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
