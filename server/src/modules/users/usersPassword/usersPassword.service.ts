import { Injectable } from '@nestjs/common';

import { sendMail } from 'src/utils/sendMail';

import { UsersService } from '../users.service';
import { RemindUserPasswordDto } from './dtos';

@Injectable()
export class UsersPasswordService {
  constructor(private usersService: UsersService) {}

  async sendPasswordReminder({ email }: RemindUserPasswordDto): Promise<void> {
    const foundedUser = await this.usersService.getUserByEmail(email);

    const message = {
      subject: 'Resetowanie hasła',
      text: 'Witaj!',
      html: `
        <p>Witaj!</p>
        <p>Otrzymaliśmy prośbę o zmianę hasła dla Twojego konta. Jeśli to nie Ty to zignoruj tę wiadomość.</p>
        <p>Aby zresetować hasło, proszę kliknij <a href="http://localhost:3000/login">tutaj</a>.</p>
      `,
    };

    if (foundedUser) {
      await sendMail({
        to: email,
        messageTemplate: message,
      });
    }
  }
}
