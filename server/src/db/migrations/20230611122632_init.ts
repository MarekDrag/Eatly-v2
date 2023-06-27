import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('users', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.string('first_name').notNullable();
    tb.string('last_name').notNullable();
    tb.string('password').notNullable();
    tb.string('email').notNullable().unique();
    tb.string('imgUrl').defaultTo(null);
    tb.enum('language', ['en', 'pl']).defaultTo('en');
    tb.enum('themeMode', ['light', 'dark']).defaultTo('light');
    tb.boolean('emailNotificationsAgreement').defaultTo(false);
    tb.boolean('newRecipesAgreement').defaultTo(false);
    tb.dateTime('created_at', { useTz: false }).notNullable().defaultTo(knex.fn.now());
    tb.dateTime('last_login', { useTz: false });
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
