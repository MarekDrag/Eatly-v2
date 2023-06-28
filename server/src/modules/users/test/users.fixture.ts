import { User } from '@types';

import { CreateUserDto } from '../dtos';

export const defaultUser: User = {
  id: 'f02bfdea-e383-4a4b-a877-5dc67327d2c8',
  password: 'pwd',
  firstName: 'Kamil',
  lastName: 'Nowak',
  email: 'test@gmail.com',
  createdAt: '',
  lastLogin: '',
  imgUrl: null,
  language: 'en',
  themeMode: 'light',
  emailNotificationsAgreement: false,
  newRecipesAgreement: false,
};

export const defaultCreateUserDto: CreateUserDto = {
  firstName: 'Kamil',
  lastName: 'Nowak',
  email: 'Kamil.Nowak@gmail.com',
  password: 'password',
};
