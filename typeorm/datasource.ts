import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mmr_admin',
  password: 'mmr_pwd',
  database: 'MMR_DB',
  entities: ['./**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
export default AppDataSource;
