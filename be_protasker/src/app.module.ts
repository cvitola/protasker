import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Configuration } from './utils/database.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => Configuration(configService),
    }),
    UsersModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
