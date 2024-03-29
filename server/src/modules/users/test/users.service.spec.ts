import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { S3Service } from '../../s3/s3.service';
import { UserDto } from '../dtos';
import { UsersRepository } from '../users.repository';
import { UsersService } from '../users.service';
import { defaultCreateUserDto, defaultUser } from './users.fixture';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepo: jest.Mocked<Partial<UsersRepository>>;
  let s3Service: jest.Mocked<Partial<S3Service>>;

  beforeEach(async () => {
    usersRepo = {
      getUserByEmail: jest.fn(),
      getUserById: jest.fn(),
      createUser: jest.fn(),
    };
    s3Service = {
      deleteFile: jest.fn(),
      uploadFile: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: usersRepo },
        { provide: S3Service, useValue: s3Service },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw error if client would try to create a user with already occcupied email', async () => {
    //arrange
    usersRepo.getUserByEmail.mockImplementation(async (email) => {
      return { ...defaultUser, email };
    });

    //act
    const registerUser: Promise<UserDto> = service.registerUser(defaultCreateUserDto);

    //assert
    expect(registerUser).rejects.toEqual(new ConflictException('there is already a user with this email'));
  });

  it('should return an instance of UserDto with hashed pwd', async () => {
    //arrange
    usersRepo.createUser.mockImplementation(async (createUserDto) => {
      return { ...defaultUser, ...createUserDto };
    });
    //act
    const createdUser = await service.registerUser(defaultCreateUserDto);
    //assert
    expect(createdUser).toBeInstanceOf(UserDto);
    expect(createdUser.password).not.toBe(defaultCreateUserDto.password);
  });
});
