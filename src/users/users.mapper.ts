import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserMapper {
  toDto(user: User): UserDto {
    const { username, email, totalWeight, internalId, sexe } = user;

    return {
      username,
      email,
      totalWeight,
      internalId,
      sexe,
    };
  }
}
