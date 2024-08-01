import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const Configuration = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT'), 10),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [join(process.cwd(), 'dist/**/*.entity.js')],
    migrations: [join(process.cwd(), 'dist/migrations/*.js')], //migraciones
    // do NOT use synchronize: true in real projects
    synchronize: false,
    ssl :{
        rejectUnauthorized: false, // Establece esto si estás usando un certificado auto-firmado
      },
});

