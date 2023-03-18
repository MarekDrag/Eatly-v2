import { Exclude } from 'class-transformer';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  createdAt: string;
  deletedAt: string;

  @Exclude()
  password: string;
}