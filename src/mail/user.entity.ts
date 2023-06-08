import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class User {

  @IsNotEmpty()
  @IsString()
  readonly Country: string;

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
  readonly NameOfCEOMD: string;

  @IsNotEmpty()
  @IsString()
  readonly MultinationalSituated: string;

  @IsNotEmpty()
  @IsString()
  readonly OrganisationVision: string;

  @IsNotEmpty()
  @IsString()
  readonly CSRSustainabiltyPolicy: string;

  @IsNotEmpty()
  @IsArray()
  readonly ReportingStandardsAdopted: string[];

  @IsNotEmpty()
  @IsArray()
  readonly AreasSustainabilityPolicyAddress: string[];

  @IsNotEmpty()
  @IsString()
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
