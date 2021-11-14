import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ActivityRepository from './repositories/activity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityRepository])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
