import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AccessTokenContent } from '../../types';
import { CreateUserDto, UserDto, UsersService } from '../users';
import { AuthService } from './auth.service';
import { AccessToken } from './dtos';

@Controller('users')
export class AuthController {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const createdUser: UserDto = await this.usersService.registerUser(createUserDto);
    return createdUser;
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
