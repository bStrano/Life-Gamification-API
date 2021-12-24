import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ database: 'authentication', synchronize: false, name: 'users' })
export default class User extends BaseEntity {
  @Column()
  id?: number;
  @Column()
  email: string;
  @Column()
  name?: string;
}
