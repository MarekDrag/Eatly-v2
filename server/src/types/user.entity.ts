import { Exclude } from 'class-transformer';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  language: 'en' | 'pl';
  themeMode: 'light' | 'dark';
  emailNotificationsAgreement: boolean;
  newRecipesAgreement: boolean;
  lastLogin: string;
  imgUrl: string | null;

  @Exclude()
  password: string;
}
