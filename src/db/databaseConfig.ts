import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConnectionOptions, parse as parseConnectionString } from "pg-connection-string";

export const getDbConfig = (configService: ConfigService): TypeOrmModuleOptions => {
    const env = configService.get('NODE_ENV');
    const databaseUrl = configService.get('DATABASE_URL');

    let config: ConnectionOptions = {
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT') || '5432',
        user: configService.get('DB_USERNAME'),
        database: configService.get('DB_NAME')
    }

    if (databaseUrl) {
        config = parseConnectionString(databaseUrl);
    }

    return {
        type: 'postgres',
        host: config.host,
        port: parseInt(config.port),
        database: config.database,
        username: config.user,
        password: config.password,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ["dist/db/migrations/**/*{.ts,.js}"],
        ...(env !== 'development' && {
            ssl: {
                rejectUnauthorized: false
            }
        }),
        synchronize: env !== 'production'
    }
}
