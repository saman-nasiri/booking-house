import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { HouseModule } from './house/house.module';
import { BookingModule } from './booking/booking.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
    UserModule,
    HouseModule,
    BookingModule,
    FavoriteModule,
  ],
})
export class AppModule {}
