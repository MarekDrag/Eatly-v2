import knexStringcase from 'knex-stringcase';

const options = {
  client: 'pg',
  connection: process.env.DB_URL,
  migrations: {
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
};

const postgresConfig = knexStringcase(options);

export default postgresConfig;
