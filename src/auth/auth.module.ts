import { UsersModule } from './../users/users.module';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
