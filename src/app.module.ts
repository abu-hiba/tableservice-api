import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgModule } from './organisation/organisation.module';

@Module({
  imports: [OrgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
