
exports.up = function (knex) {
    return knex.schema
        .createTable('users', table => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.string('firstName');
            table.string('lastName');
            table.string('email');
            table.string('password')
            table.uuid('householdId');
            table.enum('type',['system','user']).defaultsTo('user');
            table.timestamps();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
