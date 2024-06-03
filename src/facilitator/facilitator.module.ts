import { Module } from '@nestjs/common';
import { FacilitatorController } from './facilitator.controller';
import { FacilitatorService } from './facilitator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Facilitator, FacilitatorSchema } from 'schema/facilitator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Facilitator.name, schema: FacilitatorSchema },
    ]),
  ],
  controllers: [FacilitatorController],
  providers: [FacilitatorService],
})
export class FacilitatorModule {}
