import { v4 } from 'uuid';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/user-create.dto';
import { UserFiltersDto } from './dto/user-filter.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
    private userMapper: UserMapper,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const newUser = await this.userRepository.create({
      ...createUserDto,
      internalId: v4(),
      totalWeight: 0,
    });
    return this.userMapper.toDto(newUser);
  }

  async getAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find({});
    return users.map((user) => this.userMapper.toDto(user));
  }

  async getFilters(filters: UserFiltersDto): Promise<UserDto[]> {
    const users = await this.userRepository.find(filters);
    return users.map((user) => this.userMapper.toDto(user));
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await this.userRepository.findByInternalIdAndRemove(
      id,
    );
    if (deleteResult?.deletedCount > 0) {
      return true;
    } else {
      return false;
    }
  }
}
