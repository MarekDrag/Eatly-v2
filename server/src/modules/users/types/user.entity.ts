import { Exclude } from 'class-transformer';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  deletedAt: string;
  imgUrl: string | null;

  @Exclude()
  password: string;
}
