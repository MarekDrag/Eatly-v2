import { faker } from '@faker-js/faker';
import { Knex } from 'knex';

export const permanentUser1 = {
  id: 'be9f3579-f027-482f-a1d2-da613d68d1b6',
  firstName: 'Marek',
  lastName: 'Nowak',
  password: '$2a$10$yfhiN/KZkGpAkN49OMc6PecxnbSjKcOV6Z07DQpuFxmAz4DKaygC2', // Password1
  email: 'marek@gmail.com',
  imgUrl: 'https://eatlybucket.s3.eu-central-1.amazonaws.com/image-be9f3579-f027-482f-a1d2-da613d68d1b6-1688395309230',
};

export const permanentUser2 = {
  id: '41997aea-e1b4-4cc3-9e48-f235602b5ec7',
  firstName: 'Dawid',
  lastName: 'Kowalski',
  password: '$2a$10$yfhiN/KZkGpAkN49OMc6PecxnbSjKcOV6Z07DQpuFxmAz4DKaygC2', // Password1
  email: 'dawid@gmail.com',
};

const generateUser = () => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: '$2a$10$yfhiN/KZkGpAkN49OMc6PecxnbSjKcOV6Z07DQpuFxmAz4DKaygC2', // Password1
    email: faker.internet.email(),
  };
};

const generateUsersArray = () => {
  return Array.from({ length: 10 }, generateUser);
};

export const UsersArray = [permanentUser1, permanentUser2, ...generateUsersArray()];
export const UsersIds = UsersArray.map((user) => user.id);

export async function seed(knex: Knex): Promise<void> {
  await knex('users').insert(UsersArray).onConflict(['id']).merge();
}
