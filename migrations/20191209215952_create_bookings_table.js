
exports.up = function(knex) {
    return knex.schema
    .createTable('bookings', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid('userId');
        table.uuid('assetId');
        table.uuid('approvalId');
        table.date('from');
        table.date('to');
        table.float('duration').defaultTo(1).comment('given in hours');
        table.string('status');
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bookings');
};
