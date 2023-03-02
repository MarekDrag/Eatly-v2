import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import getenv from 'getenv';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccessTokenContent } from '../../../types/access-token-content.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'asda',
    });
  }

  async validate(payload: AccessTokenContent) {
    return { id: payload.id, email: payload.email };
  }
}
