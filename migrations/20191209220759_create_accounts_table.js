
exports.up = function (knex) {
  return knex.schema
    .createTable('accounts', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('name');
      table.timestamps();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('accounts');
};
