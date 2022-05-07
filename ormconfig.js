module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/db/migrations/**/*{.ts,.js}"],
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: process.env.NODE_ENV !== 'production'
}