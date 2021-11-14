import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { RewardsModule } from './Rewards/rewards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import TypeOrmConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    TypeOrmModule.forRoot(TypeOrmConfig),
    ActivitiesModule,
    RewardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
