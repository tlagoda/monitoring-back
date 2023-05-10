import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  async create() {
    console.log('user created.');
  }
}
