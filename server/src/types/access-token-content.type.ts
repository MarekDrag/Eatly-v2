import { User } from './entities';

export type AccessTokenContent = Pick<User, 'id' | 'email'>;
