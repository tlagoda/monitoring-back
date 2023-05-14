import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export class CredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Length(6, 200)
  readonly password: string;
}
