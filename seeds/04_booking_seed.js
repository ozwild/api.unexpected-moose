import User from '../../models/user.model';
import Asset from '../../models/asset.model';
import Booking from '../../models/booking.model';
import BookingState from '../../models/bookingState.model';

const faker = require('faker');

function getAssets() {
  return Asset.query()
    .catch(e => console.log);
}

function getUsers() {
  return User.query()
    .where({ type: 'user' })
    .catch(e => console.log);
}

function deleteExistingBookings(knex) {
  return knex('bookings').del().catch(e => console.log);
}

async function process(knex) {

  await deleteExistingBookings(knex);
  const assets = await getAssets();
  const users = await getUsers();

  const bookings = users.map(user => {

    const shouldCreateBooking = Math.floor(Math.random() * 100) > 75;

    if (!shouldCreateBooking)
      return Promise.resolve();

    const asset = faker.random.arrayElement(assets);

    return Booking.query()
      .insert({
        assetId: asset.id,
        userId: user.id,
        from: faker.date.recent(-30)
      })
      .then(booking => {
        return BookingState.query().insert({
          bookingId: booking.id,
          userId: user.id,
          state: "created"
        });
      })
      .catch(e => {
        console.log("Error creating booking");
      });


  });

  return Promise.all(bookings);

}

exports.seed = process;
