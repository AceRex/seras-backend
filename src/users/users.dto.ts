import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly FirstName: string;

  @IsString()
  readonly MiddleName: string;

  @IsNotEmpty()
  @IsString()
  readonly LastName: string;

  @IsNotEmpty()
  @IsString()
  readonly UserEmail: string;

  @IsNotEmpty()
  @IsString()
  readonly UserRole: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly Password: string;

}
