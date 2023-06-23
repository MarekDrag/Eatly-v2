import { Module } from '@nestjs/common';

import { UsersModule } from '../users';
import { UsersPasswordControllers } from './usersPassword.controller';
import { UsersPasswordService } from './usersPassword.service';

@Module({
  imports: [UsersModule],
  controllers: [UsersPasswordControllers],
  providers: [UsersPasswordService],
})
export class UsersPasswordModule {}
