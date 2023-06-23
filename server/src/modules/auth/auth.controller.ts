import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AccessTokenContent } from '../../types';
import { CreateUserDto, UserDto, UsersService } from '../users';
import { AuthService } from './auth.service';
import { AccessToken } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<AccessToken & { user: UserDto }> {
    const user: UserDto = await this.usersService.registerUser(createUserDto);
    const { id, email } = user;
    const accessToken = await this.authService.getAccessToken({ id, email });

    return { accessToken, user };
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  async loginUser(@Req() req: Request & { user: AccessTokenContent }): Promise<AccessToken & { user: UserDto }> {
    const accessToken = await this.authService.getAccessToken(req.user);
    const user = await this.usersService.getUserByEmail(req.user.email);

    return { accessToken, user };
  }
}
