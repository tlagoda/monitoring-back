import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userRepository: UsersRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }
}
