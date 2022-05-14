import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OrgService } from '../organisation/organisation.service';
import { OrgDto } from 'src/organisation/dto/organisation.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private orgService: OrgService) {
  super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // TODO Find way to use ConfigService
    });
  }

  async validate(payload: any): Promise<OrgDto> {
    const org = await this.orgService.getByEmail(payload.email);
    if (!org) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = org;
    return result;
  }
}
