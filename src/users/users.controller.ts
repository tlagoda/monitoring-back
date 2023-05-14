import { Body, Controller, HttpStatus, Post, Res, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UserFiltersDto } from './dto/user-filter.dto';
import { UsersService } from './users.service';
import { GetUserDto } from './dto/user-get.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signUp(@Body() user: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.usersService.createUser(user);
      return res.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error while trying to create user.',
        error: error.toString(),
      });
    }
  }

  @Get()
  async getFilters(@Body() filters: UserFiltersDto): Promise<GetUserDto[]> {}
  // todo: create 2 dto
}
