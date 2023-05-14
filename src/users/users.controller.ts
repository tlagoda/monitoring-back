import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Logger,
} from '@nestjs/common';
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

  @Get('filters')
  async getUsersByFilters(
    @Body() filters: UserFiltersDto,
  ): Promise<GetUserDto[]> {
    try {
      return this.usersService.getFilters(filters);
    } catch (error) {
      Logger.error(`Unable to get users : ${error.message}`);
    }
  }
}
