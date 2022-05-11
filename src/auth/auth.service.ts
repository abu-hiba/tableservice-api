import { Injectable } from '@nestjs/common';
import { OrgService } from '../organisation/organisation.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private orgService: OrgService) {}

    async validateOrg(email: string, pass: string): Promise<any> {
        const org = await this.orgService.getByEmail(email);
        const isPasswordMatching = await bcrypt.compare(pass, org.password);
        if (isPasswordMatching) {
            const { password, ...result } = org;
            return result;
        }
        return null;
    }
}
