import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OrgDto } from 'src/organisation/dto/organisation.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<OrgDto> {
    const org = await this.authService.validateOrg(email, password);
    if (!org) {
      throw new UnauthorizedException();
    }
    return org;
  }
}
