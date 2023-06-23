import { IsEmail } from 'class-validator';

export class RemindUserPasswordDto {
  @IsEmail()
  email: string;
}
