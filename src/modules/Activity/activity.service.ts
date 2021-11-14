import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import ActivityRepository from './repositories/activity.repository';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(private repository: ActivityRepository) {}

  create(createActivityDto: CreateActivityDto) {
    const newActivity = Activity.create(createActivityDto);
    return this.repository.save(newActivity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.update(id, updateActivityDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
