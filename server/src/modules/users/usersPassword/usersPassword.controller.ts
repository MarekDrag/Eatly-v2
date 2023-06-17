import { Body, Controller, Post } from '@nestjs/common';

import { RemindUserPasswordDto } from './dtos';
import { UsersPasswordService } from './usersPassword.service';

@Controller('users/password')
export class UsersPasswordControllers {
  constructor(private usersPasswordService: UsersPasswordService) {}

  @Post('remind')
  async sendPasswordReminder(
    @Body()
    remindUserPasswordDto: RemindUserPasswordDto,
  ): Promise<void> {
    this.usersPasswordService.sendPasswordReminder(remindUserPasswordDto);
    return;
  }
}
