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

    const encryptedPassword = await bcrypt.hash(credentials.password);
    const passwordMatches = await bcrypt.compare(
      encryptedPassword,
      user.password,
    );

    if (!passwordMatches) {
      return null;
    }
    return user;
  }
}
