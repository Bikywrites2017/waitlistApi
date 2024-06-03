import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FacilitatorDocument = HydratedDocument<Facilitator>;

@Schema({ timestamps: true })
export class Facilitator {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  currentjobtitle: string;

  @Prop()
  company: string;

  @Prop()
  linkedin?: string;

  @Prop()
  resume: string;

  @Prop()
  skilltoteach: string;

  @Prop()
  yearsofexperience: string;

  @Prop()
  educationalbackground: string;

  @Prop()
  teachingexperience: string;

  @Prop()
  why_you_want_to_become_a_facilitator: string;

  @Prop()
  portfolio: string;

  @Prop()
  howyouheardaboutus: string;

  @Prop()
  additionalnotes: string;
}

export const FacilitatorSchema = SchemaFactory.createForClass(Facilitator);
