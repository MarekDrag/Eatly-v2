import { Knex } from 'knex';

export const user1 = {
  id: 'be9f3579-f027-482f-a1d2-da613d68d1b6',
  first_name: 'Marek',
  last_name: 'Nowak',
  username: 'mareknowak',
  password: '$2a$10$iRZss/VgvQGlrblOqYfdEuUCNtJOlGymPiOp3iMGbpgtmfUnNlOi6', // pass
  email: 'marek@gmail.com',
};
export const user2 = {
  id: '41997aea-e1b4-4cc3-9e48-f235602b5ec7',
  first_name: 'Dawid',
  last_name: 'Kowalski',
  username: 'dawidkowalski',
  password: '$2a$10$iRZss/VgvQGlrblOqYfdEuUCNtJOlGymPiOp3iMGbpgtmfUnNlOi6', // pass
  email: 'dawid@gmail.com',
};

export const UsersArray = [user1, user2];

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('users').insert(UsersArray).onConflict(['id']).merge();
}
