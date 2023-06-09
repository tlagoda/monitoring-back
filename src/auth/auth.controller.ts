import { AuthService } from './auth.service';
import { UsersService } from './../users/users.service';
import { CreateUserDto } from '../users/dto/user-create.dto';
import {
  Body,
  Controller,
  Post,
  Res,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('signup')
  async signup(@Body() user: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.userService.createUser(user);
      return res.status(HttpStatus.CREATED).json(newUser);
    } catch (err) {
      Logger.error(`Unable to sign up : ${err.message}`);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error while trying to sign up.',
        error: err.toString(),
      });
    }
  }

  @Post('login')
  async login(@Body() credentials: CredentialsDto, @Res() res) {
    const user = await this.authService.validateUser(credentials);

    if (user === null) {
      Logger.warn('Failed to log in: Invalid credentials');
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Invalid credentials',
      });
    } else {
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Logged in',
      });
    }
  }
}
