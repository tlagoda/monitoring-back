import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  readonly internalId: string;
}
