import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AmbassadorDto } from 'dto/common';
import { Model } from 'mongoose';
import { Ambassador } from 'schema/ambassador.schema';

@Injectable()
export class AmbassadorService {
  constructor(
    @InjectModel(Ambassador.name)
    public readonly ambassadorModel: Model<Ambassador>,
  ) {}

  async create(ambassadorDto: AmbassadorDto): Promise<Ambassador> {
    const ambassador = new this.ambassadorModel(ambassadorDto);
    return ambassador.save();
  }
  async findAll(): Promise<Ambassador[]> {
    return this.ambassadorModel.find().exec();
  }
}
