import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class OrgReg {
  @Prop()
  Country: string;

  @Prop()
  NameOfBusinessOrganization: string;

  @Prop()
  EmailOfBusinessOrganization: string;

  @Prop()
  AddressOfBusinessOrganization: string;

  @Prop()
  NameOfCEOMD: string;

  @Prop()
  MultinationalSituated: string;

  @Prop()
  OrganisationVision: string;

  @Prop()
  CSRSustainabiltyPolicy: string;

  @Prop()
  ReportingStandardsAdopted: string[];

  @Prop()
  AreasSustainabilityPolicyAddress: string[];

  @Prop()
  GoalsAddress: string;

  @Prop()
  DecisionsAreTakenBy: string[];

  @Prop()
  WhatDeterminesTheAmountOfFunds: string[];

  @Prop()
  AwardEntry: string[];

  @Prop()
  City: string;

  @Prop()
  State: string;

  @Prop()
  OtherCountriesPresent: string;

  @Prop()
  PaymentStatus: string;

  @Prop()
  EntryKey: string;
}
export const OrgRegSchema = SchemaFactory.createForClass(OrgReg);
