import {
  IsOptional,
  IsNumber,
  IsPositive,
  IsIn,
  IsString,
  IsEmail,
} from 'class-validator';
import { Sexe } from '../interfaces/users.interface';

export class UserFiltersDto {
  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  @IsString()
  readonly internalId?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly totalWeight?: number;

  @IsOptional()
  @IsIn(['M', 'F', 'unknown'])
  readonly sexe?: Sexe;
}
