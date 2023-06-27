export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: 'en' | 'pl';
  themeMode: 'light' | 'dark';
  emailNotificationsAgreement: boolean;
  newRecipesAgreement: boolean;
  createdAt: Date;
  lastLogin: Date | null;
  imgUrl: string | null;
};
