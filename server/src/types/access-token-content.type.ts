import { User } from './user.entity';

export type AccessTokenContent = Pick<User, 'id' | 'email'>;
