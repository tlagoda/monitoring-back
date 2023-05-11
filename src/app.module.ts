import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceModule } from './performance/performance.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'performances',
    }),
    PerformanceModule,
  ],
  controllers: [AppController, UserController, UsersController],
  providers: [AppService, UserService, UsersService],
})
export class AppModule {}
