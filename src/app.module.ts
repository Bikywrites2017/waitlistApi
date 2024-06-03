import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaitlistModule } from './waitlist/waitlist.module';
import { FacilitatorModule } from './facilitator/facilitator.module';
import { AmbassadorModule } from './ambassador/ambassador.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WaitlistModule,
    FacilitatorModule,
    AmbassadorModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
