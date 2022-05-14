module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/**/migrations/**/*{.ts,.js}"],
    ...(process.env.NODE_ENV !== 'development' && {
        ssl: {
            rejectUnauthorized: false
        }
    }),
    synchronize: process.env.NODE_ENV !== 'production'
}
