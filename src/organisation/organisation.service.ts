import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { CreateOrgDto } from './dto/create-organisation.dto';
import { Org } from './organisation.entity';

@Injectable()
export class OrgService {
    constructor(@InjectRepository(Org) private orgRepository: Repository<Org>) {}

    create(org: CreateOrgDto) {
        const todayPlusMonth = moment().add(1, 'M');
        const subscriptionEndDate = todayPlusMonth.toDate();
        return this.orgRepository.save({ ...org, subscriptionEndDate });
    }

    findOne(id: string): Promise<Org> {
        return this.orgRepository.findOne(id);        
    }

    findAll(): Promise<Org[]> {
        return this.orgRepository.find();
    }
}
