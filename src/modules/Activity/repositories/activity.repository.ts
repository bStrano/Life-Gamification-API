import { EntityRepository, Repository } from 'typeorm';
import { Activity } from '../entities/activity.entity';

@EntityRepository(Activity)
export default class ActivityRepository extends Repository<Activity> {}
