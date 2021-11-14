import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Activity {
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
}
