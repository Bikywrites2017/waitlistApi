import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FacilitatorDto } from 'dto/common';
import { Model } from 'mongoose';
import { Facilitator } from 'schema/facilitator.schema';

@Injectable()
export class FacilitatorService {
  constructor(
    @InjectModel(Facilitator.name)
    public readonly facilitatorModel: Model<Facilitator>,
  ) {}

  async create(facilitatorDto: FacilitatorDto): Promise<Facilitator> {
    const facilitator = new this.facilitatorModel(facilitatorDto);
    return facilitator.save();
  }
  async findAll(): Promise<Facilitator[]> {
    return this.facilitatorModel.find().exec();
  }
}
