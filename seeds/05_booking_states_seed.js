import User from '../../models/user.model';
import Booking from '../../models/booking.model';
import BookingState from '../../models/bookingState.model';

const faker = require('faker');
const availableStates = [
  'approved','rejected','cancelled'
];

function deleteExistingApprovals(knex) {
  return knex('approvals').del().catch(e => console.log);
}

function getBookings() {
  return Booking.query()
    .catch(e => console.log);
}

function pickRandomState(){
  return faker.random.arrayElement(availableStates);
}

function getStateReviewer() {
  return User.query()
    .where({ firstName: "Robot", lastName: "User" })
    .first()
    .catch(e => console.log);
}

async function process(knex) {

  const reviewer = await getStateReviewer();
  const bookings = await getBookings();

  await deleteExistingApprovals(knex);

  const states = bookings.map(booking => {

    const shouldProcess = faker.random.boolean();

    if (!shouldProcess) return Promise.resolve();

    return BookingState.query().insert({
      bookingId: booking.id,
      userId: reviewer.id,
      state: pickRandomState()
    });

  });

  return Promise.all(states);

}

exports.seed = process;
