import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'asda',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [LocalStrategy, JwtStrategy, AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
