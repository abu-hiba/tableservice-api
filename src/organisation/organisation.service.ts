import { Injectable } from '@nestjs/common';
import { Org } from './interfaces/organisation.interface';

@Injectable()
export class OrgService {
    private readonly orgs: Org[] = [];

    create(org: Org) {
        this.orgs.push(org);
    }

    findOne(name: string) {
        return this.orgs.find(org => org.name === name);
    }

    findAll() {
        return this.orgs;
    }
}
