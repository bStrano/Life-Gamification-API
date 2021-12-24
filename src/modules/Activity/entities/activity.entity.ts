import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import User from '../../User/entities/User';

@Entity()
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Breve descrição da atividade' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({
    description: 'Pontuação que a atividade irá recompensar ao ser concluída',
  })
  @Column({ default: 0 })
  points: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creator_id' })
  creator: User;
}
