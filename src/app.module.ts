import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgModule } from './organisation/organisation.module';
import { typeOrmModuleOptions } from './db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    OrgModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
