import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsIn,
  Length,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { Sexe } from '../interfaces/users.interface';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Length(6, 200)
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly totalweight: number;

  @IsIn(['M', 'F'])
  readonly sexe?: Sexe;
}
