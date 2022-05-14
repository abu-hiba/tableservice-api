import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import 'dotenv/config';
import { OrgModule } from './organisation/organisation.module';
import { config, validationSchema } from '../config';
import { DatabaseModule } from './db/database.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema
    }),
    OrgModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
