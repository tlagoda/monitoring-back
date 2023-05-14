import { v4 } from 'uuid';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/user-create.dto';
import { UserFiltersDto } from './dto/user-filter.dto';
import { GetUserDto } from './dto/user-get.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userRepository: UsersRepository,
    private userMapper: UserMapper,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create({
      ...createUserDto,
      internalId: v4(),
      totalWeight: 0,
    });
  }

  async getFilters(filters: UserFiltersDto): Promise<GetUserDto[]> {
    const users = await this.userRepository.find(filters);
    return users.map((user) => this.userMapper.toDto(user));
  }
}
