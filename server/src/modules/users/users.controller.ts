import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { JwtAuthGuard } from '../auth';
import { GetUserDto, UpdateUserDto, UpdateUserPasswordDto } from './dtos';
import { UserJwtPayload } from './interfaces';
import { User } from './types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersControllers {
  constructor(private usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getByToken(
    @Request()
    req: UserJwtPayload,
  ): Promise<User> {
    return this.usersService.getUserById(req.user.id);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findOne(
    @Param()
    getUserDto: GetUserDto,
  ): Promise<User> {
    return this.usersService.getUserById(getUserDto.id);
  }

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // async findAll(): Promise<User[]> {
  //   return this.usersService.getUsers();
  // }

  @Patch('/password')
  @UseGuards(JwtAuthGuard)
  async updateUserPassword(
    @Request()
    req: UserJwtPayload,
    @Body()
    updateUserPasswordDto: UpdateUserPasswordDto,
  ): Promise<void> {
    await this.usersService.updateUserPassword(req.user.id, updateUserPasswordDto);
  }

  @Patch('/image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async updateUserImage(
    @Request()
    req: UserJwtPayload,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<User> {
    return this.usersService.updateUserImage(req.user.id, image);
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  async updateUserById(
    @Param('id', ParseUUIDPipe)
    id,
    @Body()
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateUserByToken(
    @Request()
    req: UserJwtPayload,
    @Body()
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(req.user.id, updateUserDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteUserById(
    @Param('id', ParseUUIDPipe)
    id,
  ): Promise<void> {
    await this.usersService.deleteUser(id);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteUserByToken(
    @Request()
    req: UserJwtPayload,
  ): Promise<void> {
    await this.usersService.deleteUser(req.user.id);
  }
}
