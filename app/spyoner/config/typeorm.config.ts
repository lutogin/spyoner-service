import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_URL } from './app.config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  url: DATABASE_URL,
  entities: ['dist/src/**/*.entity.{js,ts}'],
  migrations: ['dist/src/migrations/*.{js,ts}'],
  synchronize: false,
  migrationsRun: true,
};
