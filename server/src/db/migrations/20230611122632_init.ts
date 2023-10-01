import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('users', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.string('first_name').notNullable();
    tb.string('last_name').notNullable();
    tb.string('password').notNullable();
    tb.string('email').notNullable().unique();
    tb.text('img_url').defaultTo(null);
    tb.enum('language', ['en', 'pl']).defaultTo('en');
    tb.enum('theme_mode', ['light', 'dark']).defaultTo('light');
    tb.boolean('emailNotificationsAgreement').defaultTo(false);
    tb.boolean('newRecipesAgreement').defaultTo(false);
    tb.dateTime('created_at', { useTz: false }).notNullable().defaultTo(knex.fn.now());
    tb.dateTime('last_login', { useTz: false });
  });

  await knex.schema.createTable('recipes', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.string('name').notNullable();
    tb.text('description').notNullable();
    tb.integer('cooking_time').notNullable();
    tb.float('rating_value').notNullable().defaultTo(0);
    tb.integer('reviews_number').notNullable().defaultTo(0);
    tb.integer('persons').notNullable().defaultTo(1);
    tb.integer('calories').notNullable().defaultTo(0);
    tb.text('img_url').defaultTo(null);
    tb.enum('type', ['meat', 'vege']).notNullable();
    tb.uuid('creator_id').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    tb.enum('status', ['public', 'private']).notNullable().defaultTo('private');
    tb.enum('meal', ['breakfast', 'lunch', 'dinner', 'snack', 'dessert']).notNullable();
    tb.jsonb('steps').notNullable();
    tb.dateTime('created_at', { useTz: false }).notNullable().defaultTo(knex.fn.now());
    tb.dateTime('deleted_at', { useTz: false });
  });

  await knex.schema.createTable('ingredients', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.string('measure').notNullable();
    tb.string('name').notNullable();
  });

  await knex.schema.createTable('liked_recipes', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    tb.uuid('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
  });

  await knex.schema.createTable('recipes_comments', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.uuid('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
    tb.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    tb.integer('likes').defaultTo(0);
    tb.text('content').notNullable();
    tb.dateTime('created_at', { useTz: false }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('recipes_ingredients', (tb) => {
    tb.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'));
    tb.integer('amount').notNullable();
    tb.uuid('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
    tb.uuid('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('recipes');
  await knex.schema.dropTable('liked_recipes');
  await knex.schema.dropTable('recipes_comments');
  await knex.schema.dropTable('ingredients');
  await knex.schema.dropTable('recipe_ingredients');
}
