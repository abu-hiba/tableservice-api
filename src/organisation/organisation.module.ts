import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgController } from './organisation.controller';
import { OrgService } from './organisation.service';
import { Org } from './organisation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Org])],
    controllers: [OrgController],
    // TODO: Add Event subscriber
    // TODO: create mock repository
    providers: [OrgService],
    exports: [OrgService],
})
export class OrgModule {}
