import { CredentialsDto } from './dto/credentials.dto';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(crendentials: CredentialsDto) {
    const user = await this.usersService.getByEmail(crendentials.email);

    if (!user) {
      return null;
    }

    const passwordIsValid = user.password === crendentials.password;

    if (!passwordIsValid) {
      return null;
    }
    return user;
  }
}
