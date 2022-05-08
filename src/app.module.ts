import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgModule } from './organisation/organisation.module';
import { typeOrmModuleOptions } from './db/data-source';
import { config, validationSchema } from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema
    }),
    OrgModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
