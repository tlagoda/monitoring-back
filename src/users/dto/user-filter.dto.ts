import {
  IsOptional,
  IsNumber,
  IsPositive,
  IsIn,
  IsString,
  IsEmail,
} from 'class-validator';

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
}
