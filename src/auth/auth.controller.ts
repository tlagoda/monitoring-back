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

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post()
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
}
