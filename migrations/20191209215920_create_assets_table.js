
exports.up = function(knex) {
    return knex.schema
    .createTable('assets', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name');
        table.text('description');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('assets');
};
