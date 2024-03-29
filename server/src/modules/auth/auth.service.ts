import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import bcrypt from 'bcryptjs';

import { AccessTokenContent } from '../../types';
import { UsersService } from '../users';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<AccessTokenContent | null> {
    const foundUser = await this.usersService.getUserByEmail(email);

    const matched = await bcrypt.compare(password, foundUser?.password || '');
    if (!matched) {
      return null;
    }
    return { id: foundUser.id, email: foundUser.email };
  }

  async getAccessToken(user: AccessTokenContent): Promise<string> {
    await this.usersService.updateUserLastLogin;

    return this.jwtService.sign(user);
  }
}
