import { IsInt, IsString, Length, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty()
  @IsString()
  @Length(3, 30)
  readonly name: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(1000)
  readonly points: number;
}
