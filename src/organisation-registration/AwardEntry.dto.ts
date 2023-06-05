import { IsNotEmpty, IsArray } from 'class-validator';

export class AwardEntryDto {

  @IsNotEmpty()
  @IsArray()
  readonly AwardEntry: string[];
}
