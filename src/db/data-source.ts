import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions, parse } from 'pg-connection-string';

let config: ConnectionOptions = {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    database: 'postgres'
}

if (process.env.DATABASE_URL) {
    config = parse(process.env.DATABASE_URL);
}

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
    type: "postgres",
    host: config.host,
    port: parseInt(config.port) || 5432,
    username: config.user,
    database: config.database,
    password: config.password,
    entities: ["dist/**/*.entity{.ts,.js}"],
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: process.env.NODE_ENV !== 'production'
}
