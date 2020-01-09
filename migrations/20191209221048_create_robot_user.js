
exports.up = function (knex) {
    const data = {
        firstName: "Robot",
        lastName: "User",
        email: process.env.ROBOT_EMAIL || "robot@system.com",
        type: "system",
        created_at: knex.fn.now(),
        updated_at: knex.fn.now()
    };
    return knex.insert(data).into('users');
};

exports.down = function (knex) {
    return knex('users')
        .where({ firstName: "Robot", lastName: "User" })
        .del()
};
