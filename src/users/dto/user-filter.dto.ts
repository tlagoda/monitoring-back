import {
  IsOptional,
  IsNumber,
  IsPositive,
  IsIn,
  IsNotEmpty,
  IsString,
  Length,
  IsEmail,
} from 'class-validator';
import { Sexe } from '../interfaces/users.interface';

export class UserFilterDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly totalWeight?: number;

  @IsOptional()
  @IsIn(['M', 'F'])
  readonly sexe?: Sexe;
}
