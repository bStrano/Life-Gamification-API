import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import './env.config';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: 'all',
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: '/src/database/migrations',
  },
};

export default TypeOrmConfig;
