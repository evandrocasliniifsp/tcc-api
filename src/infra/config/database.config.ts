import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import {
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER
} from './environment.config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  logging: false,
  entities: ['./src/domain/entities/*.ts'],
  subscribers: [],
  migrations: ['./build/migrations/*.js'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});
