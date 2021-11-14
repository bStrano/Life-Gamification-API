import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Activity } from './entities/activity.entity';

@ApiTags('Activities')
@Controller('activities')
export class ActivityController {
  constructor(private readonly activitiesService: ActivityService) {}

  @Post()
  @ApiOperation({ summary: 'Create activity' })
  @ApiResponse({
    status: 201,
    description: 'Return the created activity',
    type: Activity,
  })
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  @ApiOperation({ summary: 'List Activities' })
  @ApiResponse({
    status: 200,
    description: 'Return the list of activities',
    type: [Activity],
  })
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List activity by Id' })
  @ApiResponse({
    status: 200,
    description: 'Return the activity of the specified ID',
    type: Activity,
  })
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update activity' })
  update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete activity' })
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }
}
