import { CredentialsDto } from './dto/credentials.dto';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(credentials: CredentialsDto) {
    const user = await this.usersService.getByEmail(credentials.email);

    if (!user) {
      return null;
    }

    const passwordMatches = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!passwordMatches) {
      return null;
    }
    return user;
  }
}
