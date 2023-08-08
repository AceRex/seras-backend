import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  readonly UserEmail: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly Password: string;

}
