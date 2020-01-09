
exports.up = function(knex) {
    return knex.schema
    .createTable('households', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('address');
        table.string('phone');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('households');
};
