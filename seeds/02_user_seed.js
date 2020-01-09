const faker = require('faker');

const process = async knex => {

  await knex('users').del().where({ type: 'user' });

  const data = Array.apply(null, Array(25))
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }));

  return knex('users').insert(data);

};

exports.seed = process;
