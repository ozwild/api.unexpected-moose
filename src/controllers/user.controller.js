import User from '../models/user.model';

const pageSize = 25;

export default {
    async list(request, h) {

        const page = request.query.page || 0;
        return User.query().page(page, pageSize)
            .catch(error => h.response(error.toString()).code(400))

    },
    async store(request, h) {

    },
    async show(request, h) {

        const id = request.params.user;
        return User.query()
            .where('id', id)
            .withGraphFetched('[household, bookings, reviews.booking]')
            .catch(error => h.response(error.toString()).code(400))

    },
    async update(request, h) {

    },
    async delete(request, h) {

    },
    async listUserBookings(request, h) {

        const id = request.params.user;
        return User.relatedQuery('bookings')
        .for(id)
        .catch(error => h.response(error.toString()).code(400))

    },
    async listUserReviews(request, h){

        const id = request.params.user;
        return User.relatedQuery('reviews')
        .withGraphFetched('[booking.asset, booking.user]')
        .for(id)
        .catch(error => h.response(error.toString()).code(400))

    }
};

