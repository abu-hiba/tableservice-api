import { Injectable } from '@nestjs/common';
import { OrgService } from '../organisation/organisation.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { OrgDto } from 'src/organisation/dto/organisation.dto';

@Injectable()
export class AuthService {
    constructor(
        private orgService: OrgService,
        private jwtService: JwtService
    ) {}

    async validateOrg(email: string, pass: string): Promise<OrgDto> {
        const org = await this.orgService.getByEmail(email);
        const isPasswordMatching = await bcrypt.compare(pass, org.password);
        if (isPasswordMatching) {
            const { password, ...result } = org;
            return result;
        }
        return null;
    }

    async login(org: any) {
        const payload = { email: org.email, sub: org.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
