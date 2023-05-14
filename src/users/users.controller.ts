import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Logger,
  Delete,
  Param,
  HttpException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UserFiltersDto } from './dto/user-filter.dto';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { get } from 'http';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async create(@Body() user: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.usersService.createUser(user);
      return res.status(HttpStatus.CREATED).json(newUser);
    } catch (err) {
      Logger.error(
        `Canno't create user ${user.username} / ${user.email} : ${err.message}`,
      );
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error while trying to create user.',
        error: err.toString(),
      });
    }
  }

  @Get()
  async getAll(): Promise<UserDto[]> {
    try {
      const allUsers = await this.usersService.getAll();
      return allUsers;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get('filters')
  async getUsersByFilters(@Body() filters: UserFiltersDto): Promise<UserDto[]> {
    try {
      return this.usersService.getFilters(filters);
    } catch (err) {
      Logger.error(`Unable to get users : ${err.message}`);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      const isDeleted = await this.usersService.delete(id);
      if (isDeleted) {
        return {
          message: `User #${id} has been deleted.`,
        };
      } else {
        return {
          message: `Canno't delete user #${id}.`,
        };
      }
    } catch (err) {
      Logger.error(`Error while trying to delete user #${id} : ${err.message}`);
      throw new HttpException(err.message, err.status);
    }
  }
}
