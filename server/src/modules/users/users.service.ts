import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import bcrypt from 'bcryptjs';
import { plainToClass } from 'class-transformer';

import { S3Service } from '../s3';
import { CreateUserDto, UpdateUserDto, UpdateUserPasswordDto, UserDto } from './dtos';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository, private s3Service: S3Service) {}

  async registerUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const foundUserByEmail = await this.usersRepo.getUserByEmail(createUserDto.email);
    if (foundUserByEmail) {
      throw new ConflictException('there is already a user with this email');
    }

    const hash: string = await bcrypt.hash(createUserDto.password, 10);

    const newUser: CreateUserDto = { ...createUserDto, password: hash };

    const createdUserDb = await this.usersRepo.createUser(newUser);
    const createdUser = plainToClass(UserDto, createdUserDb);

    return createdUser;
  }

  async getUserById(userId: string): Promise<UserDto> {
    const foundUserDb = await this.usersRepo.getUserById(userId);
    const foundUser = plainToClass(UserDto, foundUserDb);
    return foundUser;
  }

  async getUserByEmail(email: string): Promise<UserDto> {
    const foundUserDb = await this.usersRepo.getUserByEmail(email);
    const foundUser = plainToClass(UserDto, foundUserDb);
    return foundUser;
  }

  async updateUserLastLogin(email: string): Promise<void> {
    await this.usersRepo.updateUserLastLogin(email);
  }

  async getUsers(): Promise<UserDto[]> {
    return this.usersRepo.getUsers();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto, image?: Express.Multer.File): Promise<UserDto> {
    if (image) {
      await this.updateUserImage(id, image);
    }

    const updatedUserDb = await this.usersRepo.updateUser(id, updateUserDto);

    const updatedUser = plainToClass(UserDto, updatedUserDb);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.deleteUserImage(id);
    await this.usersRepo.deleteUser(id);
  }

  async updateUserImage(id: string, image: Express.Multer.File): Promise<UserDto> {
    const key = `${image.fieldname}-${id}-${Date.now()}`;
    const imageUrl = await this.s3Service.uploadFile(image, key);

    await this.deleteUserImage(id);

    return this.usersRepo.updateUserImgUrl(id, imageUrl);
  }

  async deleteUserImage(id: string) {
    const { imgUrl } = await this.getUserById(id);

    if (imgUrl) {
      await this.s3Service.deleteFile(imgUrl);
    }
  }

  async updateUserPassword(id: string, updateUserPasswordDto: UpdateUserPasswordDto) {
    if (updateUserPasswordDto.password === updateUserPasswordDto.newPassword) {
      throw new ConflictException('Passwords must be different');
    }

    const foundedUser = await this.getUserById(id);
    if (!foundedUser) {
      throw new NotFoundException('User not found');
    }

    const matched = await bcrypt.compare(updateUserPasswordDto.password, foundedUser.password);
    if (!matched) {
      throw new ConflictException("Password don't match");
    }

    const hashedPassword: string = await bcrypt.hash(updateUserPasswordDto.newPassword, 10);
    await this.usersRepo.updateUserPassword(id, hashedPassword);
  }
}
