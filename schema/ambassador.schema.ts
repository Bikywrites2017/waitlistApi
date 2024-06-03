import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AmbassadorDocument = HydratedDocument<Ambassador>;

@Schema({ timestamps: true })
export class Ambassador {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  university: string;

  @Prop()
  yearofstudy: string;

  @Prop()
  fieldofstudy: string;

  @Prop()
  country: string;

  @Prop()
  why_to_be_an_ambassador: string;

  @Prop()
  linkedin?: string;

  @Prop()
  resume: string;

  @Prop()
  facebook?: string;
  @Prop()
  twitter?: string;
  @Prop()
  instagram?: string;
  @Prop()
  howyouheardaboutus: string;

  @Prop()
  additionalnotes: string;
}

export const AmbassadorSchema = SchemaFactory.createForClass(Ambassador);
