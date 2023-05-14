import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Sexe } from '../interfaces/users.interface';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly totalWeight: number;

  @IsIn(['M', 'F'])
  readonly sexe?: Sexe;

  @IsNotEmpty()
  @IsString()
  readonly internalId: string;
}
