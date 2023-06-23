import { Module } from '@nestjs/common';

import { S3Module } from '../s3';
import { UsersControllers } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [S3Module],
  controllers: [UsersControllers],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
