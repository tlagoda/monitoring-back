import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser(user) {
    return 'user created';
  }
}
