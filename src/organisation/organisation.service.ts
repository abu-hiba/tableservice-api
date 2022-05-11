import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { CreateOrgDto } from './dto/create-organisation.dto';
import { Org } from './organisation.entity';
import { OrgDto } from './dto/organisation.dto';

@Injectable()
export class OrgService {
  constructor(@InjectRepository(Org) private orgRepository: Repository<Org>) { }

  async create(org: CreateOrgDto) {
    const hashedPassword = await bcrypt.hash(org.password, 10);
    try {
      const todayPlusMonth = moment().add(1, 'M');
      const subscriptionEndDate = todayPlusMonth.toDate();

      const newOrg = this.orgRepository.create({
        ...org,
        subscriptionEndDate,
        password: hashedPassword
      });

      await this.orgRepository.save(newOrg);
      const { password, ...result } = newOrg;
      return result;
    } catch (err) {
      throw new HttpException(`Unable to create organisation`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByEmail(email: string): Promise<Org> {
    const org = await this.orgRepository.findOne({ email });
    if (org) {
      return org;
    }
    throw new HttpException('Organisation with this email does not exist', HttpStatus.NOT_FOUND);
  }

  async findOne(id: string): Promise<OrgDto> {
    const org = await this.orgRepository.findOne(id);
    if (org) {
      const { password, ...result } = org;
      return result;
    }
    throw new HttpException('Organisation with this id does not exist', HttpStatus.NOT_FOUND);
  }

  async findAll(): Promise<OrgDto[]> {
    const orgs = await this.orgRepository.find();
    const result = orgs.map(org => {
      const { password, ...orgWithoutPass } = org;
      return orgWithoutPass;
    });
    return result;
  }
}

