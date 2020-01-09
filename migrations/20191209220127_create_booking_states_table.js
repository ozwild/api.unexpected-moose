
exports.up = function (knex) {
    return knex.schema
        .createTable('booking_states', table => {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
            table.uuid('bookingId');
            table.uuid('userId');
            table.enum('state', ['created', 'approved', 'rejected', 'cancelled']);
            table.timestamps();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('booking_states');
};
