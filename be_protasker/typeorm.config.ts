import { config } from 'dotenv';
import { DataSource } from 'typeorm';
const env = process.env.NODE_ENV || 'development';

config({
  path: `.env`,
});

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/**/entities/*.entity.ts'],
    migrations: ['src/utils/migrations/*.ts'],
    ssl :{
      rejectUnauthorized: false, // Establece esto si estás usando un certificado auto-firmado
    },
});
