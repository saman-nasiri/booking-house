/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { User, UserDocument } from '../user/schemas/user.schema';
import { House, HouseDocument } from '../house/schemas/house.schema';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(House.name) private houseModel: Model<HouseDocument>
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { guestId, hostId, houseId, totalPrice } = createBookingDto;

    const guest = await this.userModel.findById(guestId);
    if (!guest) {
      throw new NotFoundException(`Guest with ID ${guestId} not found`);
    }

    const host = await this.userModel.findById(hostId);
    if (!host) {
      throw new NotFoundException(`Host with ID ${hostId} not found`);
    }

    const house = await this.houseModel.findById(houseId);
    if (!house) {
      throw new NotFoundException(`House with ID ${houseId} not found`);
    }

    const existingBooking = await this.bookingModel.findOne({ houseId });
    if (existingBooking) {
      throw new BadRequestException('This house is already booked');
    }

    const booking = new this.bookingModel({
      guestId,
      hostId,
      houseId,
      totalPrice,
    });
    return booking.save();
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }
}
