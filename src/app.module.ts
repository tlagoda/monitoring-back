import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceModule } from './performance/performance.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WeightController } from './weight/weight.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PerformanceModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, WeightController],
  providers: [AppService],
})
export class AppModule {}
