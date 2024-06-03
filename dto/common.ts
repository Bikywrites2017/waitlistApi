import { ApiProperty } from '@nestjs/swagger';

export class AmbassadorDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  university: string;

  @ApiProperty()
  yearofstudy: string;

  @ApiProperty()
  fieldofstudy: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  why_to_be_an_ambassador: string;

  @ApiProperty()
  linkedin?: string;

  @ApiProperty()
  resume: string;

  @ApiProperty()
  facebook?: string;
  @ApiProperty()
  twitter?: string;
  @ApiProperty()
  instagram?: string;
  @ApiProperty()
  howyouheardaboutus: string;

  @ApiProperty()
  additionalnotes: string;
}

export class WaitlistDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  preferredcourse: string;

  @ApiProperty()
  levelofeducation: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  howyouheardaboutus: string;

  @ApiProperty()
  additionalnotes: string;
}

export class FacilitatorDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  currentjobtitle: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  linkedin?: string;

  @ApiProperty()
  resume: string;

  @ApiProperty()
  skilltoteach: string;

  @ApiProperty()
  yearsofexperience: string;

  @ApiProperty()
  educationalbackground: string;

  @ApiProperty()
  teachingexperience: string;

  @ApiProperty()
  why_you_want_to_become_a_facilitator: string;

  @ApiProperty()
  portfolio: string;

  @ApiProperty()
  howyouheardaboutus: string;

  @ApiProperty()
  additionalnotes: string;
}
