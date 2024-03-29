import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AccessTokenContent } from '@types';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.API_SECRET_TOKEN_KEY,
    });
  }

  async validate(payload: AccessTokenContent) {
    return { id: payload.id, email: payload.email };
  }
}
