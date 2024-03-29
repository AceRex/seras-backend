import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrgRegDto {
  @IsNotEmpty()
  @IsString()
  readonly Country: string;

  @IsNotEmpty()
  @IsString()
  readonly City: string;

  @IsNotEmpty()
  @IsString()
  readonly State: string;

  @IsNotEmpty()
  @IsString()
  readonly NameOfBusinessOrganization: string;

  @IsNotEmpty()
  @IsString()
  readonly EmailOfBusinessOrganization: string;

  @IsNotEmpty()
  @IsString()
  readonly AddressOfBusinessOrganization: string;

  @IsNotEmpty()
  @IsString()
  readonly EntryKey: string;

  @IsString()
  readonly OtherCountriesPresent: string;

  @IsNotEmpty()
  @IsString()
  readonly NameOfCEOMD: string;

  @IsNotEmpty()
  @IsString()
  readonly MultinationalSituated: string;

  @IsString()
  readonly OrganisationVision: string;

  @IsNotEmpty()
  @IsString()
  readonly CSRSustainabiltyPolicy: string;

  @IsString()
  readonly PaymentStatus: string;

  @IsNotEmpty()
  @IsArray()
  readonly ReportingStandardsAdopted: string[];

  @IsNotEmpty()
  @IsArray()
  readonly AreasSustainabilityPolicyAddress: string[];

  readonly GoalsAddress: string;

  @IsNotEmpty()
  @IsArray()
  readonly DecisionsAreTakenBy: string[];

  @IsNotEmpty()
  @IsArray()
  readonly WhatDeterminesTheAmountOfFunds: string[];

  @IsNotEmpty()
  @IsArray()
  readonly AwardEntry: string[];
}
