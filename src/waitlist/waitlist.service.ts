import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WaitlistDto } from 'dto/common';
import { Model } from 'mongoose';
import { Waitlist } from 'schema/waitlist.schema';

@Injectable()
export class WaitlistService {
  constructor(
    @InjectModel(Waitlist.name)
    public readonly waitlistModel: Model<Waitlist>,
  ) {}

  async create(waitlistDto: WaitlistDto): Promise<Waitlist> {
    const waitlist = new this.waitlistModel(waitlistDto);
    return waitlist.save();
  }
  async findAll(): Promise<Waitlist[]> {
    return this.waitlistModel.find().exec();
  }
}
