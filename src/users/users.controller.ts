import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signUp(@Body() user: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.usersService.createUser(user);
    } catch (error) {
      // TODO
    }
  }
}
