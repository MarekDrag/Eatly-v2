import { Exclude } from 'class-transformer';

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  lastLogin: string;
  imgUrl: string | null;

  @Exclude({ toPlainOnly: true })
  password: string;
}
