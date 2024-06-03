import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WaitlistDocument = HydratedDocument<Waitlist>;

@Schema({ timestamps: true })
export class Waitlist {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  preferredcourse: string;

  @Prop()
  levelofeducation: string;

  @Prop()
  country: string;

  @Prop()
  howyouheardaboutus: string;

  @Prop()
  additionalnotes: string;
}

export const WaitlistSchema = SchemaFactory.createForClass(Waitlist);
