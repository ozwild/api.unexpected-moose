
exports.up = function (knex) {
    const data = {
        firstName: "Root",
        lastName: "User",
        email: process.env.ROOT_EMAIL || "root@system.com",
        type: "system",
        created_at: knex.fn.now(),
        updated_at: knex.fn.now()
    };
    return knex.insert(data).into('users');
};

exports.down = function (knex) {
    return knex('users')
        .where({ firstName: "Root", lastName: "User" })
        .del()
};
