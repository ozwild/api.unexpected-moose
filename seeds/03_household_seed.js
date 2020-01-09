import User from '../../models/user.model';

const faker = require('faker');

exports.seed = function (knex) {
console.log('household seeder');
  return knex('households').del()
    .then(() => {

      return User.query().where({ type: 'user' })
        .then(users => {

          return users.map(user => {

            return User.relatedQuery('household')
              .for(user.id)
              .insert({
                address: faker.address.streetAddress(),
                phone: faker.phone.phoneNumber()
              }).catch(e => console.log);

          });

        });
    }).catch(e => console.log);


};
