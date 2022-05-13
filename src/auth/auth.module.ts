import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { OrgModule } from 'src/organisation/organisation.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        OrgModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET, // TODO change this to use ConfigService
            signOptions: { expiresIn: '1h' }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
