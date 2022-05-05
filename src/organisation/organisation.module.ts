import { Module } from '@nestjs/common';
import { OrgController } from './organisation.controller';
import { OrgService } from './organisation.service';

@Module({
    controllers: [OrgController],
    providers: [OrgService],
})
export class OrgModule {}
