import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { GetUserDto } from './dto/user-get.dto';

@Injectable()
export class UserMapper {
  toDto(user: User): GetUserDto {
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
