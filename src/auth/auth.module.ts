import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { OrgModule } from 'src/organisation/organisation.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [OrgModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
