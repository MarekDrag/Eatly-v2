import { Knex } from 'knex';

export const user1 = {
  id: 'be9f3579-f027-482f-a1d2-da613d68d1b6',
  first_name: 'Marek',
  last_name: 'Nowak',
  password: '$2a$10$yfhiN/KZkGpAkN49OMc6PecxnbSjKcOV6Z07DQpuFxmAz4DKaygC2', // Password1
  email: 'marek@gmail.com',
  imgUrl: 'https://eatlybucket.s3.eu-central-1.amazonaws.com/image-a35f7306-34c1-48f0-a487-6f4f6e75ad48-1687725013772',
};
export const user2 = {
  id: '41997aea-e1b4-4cc3-9e48-f235602b5ec7',
  first_name: 'Dawid',
  last_name: 'Kowalski',
  password: '$2a$10$yfhiN/KZkGpAkN49OMc6PecxnbSjKcOV6Z07DQpuFxmAz4DKaygC2', // Password1
  email: 'dawid@gmail.com',
};

export const UsersArray = [user1, user2];

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('users').insert(UsersArray).onConflict(['id']).merge();
}
