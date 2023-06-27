import { Exclude } from 'class-transformer';

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string | null;
  language: 'en' | 'pl';
  themeMode: 'light' | 'dark';
  emailNotificationsAgreement: boolean;
  newRecipesAgreement: boolean;
  lastLogin: string;
  createdAt: string;

  @Exclude({ toPlainOnly: true })
  password: string;
}
