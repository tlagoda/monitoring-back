import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsString,
  IsIn,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsIn(['M', 'F'])
  readonly sexe?: string;
}
