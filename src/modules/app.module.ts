import { Module } from '@nestjs/common';
import { ActivityModule } from './Activity/activity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import TypeOrmConfig from '../config/database.config';
import { UserModule } from './User/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    TypeOrmModule.forRoot(TypeOrmConfig),
    ActivityModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
