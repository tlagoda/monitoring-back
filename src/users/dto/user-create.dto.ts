import { IsNotEmpty, IsEmail, IsString, IsIn, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @Length(6, 200)
  readonly password: string;
}
