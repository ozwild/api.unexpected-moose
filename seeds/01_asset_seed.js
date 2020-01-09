require('../db');

const faker = require('faker');

const process = async knex => {

  await knex('assets').del();

  const data = ["Salon de Reuniones", "Cancha de Tennis", "Piscina", "Campo de Futbol", "Area de Juegos"]
    .map(name => ({
      name,
      description: faker.lorem.paragraph(),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }));

  return knex('assets').insert(data);

};

exports.seed = process;
