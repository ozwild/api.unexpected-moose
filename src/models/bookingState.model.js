import { Model } from 'objection';
import BaseModel from './base.model';

class BookingState extends BaseModel {

    static get tableName() {
        return 'booking_states';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['bookingId', 'userId'],
            properties: {
                bookingId: { type: 'uuid' },
                userId: { type: 'uuid' },
                state: { type: 'string' }
            }
        };
    };

    static get relationMappings() {
        return {
            booking: {
                relation: Model.BelongsToOneRelation,
                modelClass: 'booking.model',
                join: {
                    from: 'booking_states.bookingId',
                    to: 'bookings.id'
                }
            },

            reviewer: {
                relation: Model.BelongsToOneRelation,
                modelClass: 'user.model',
                join: {
                    from: 'booking_states.userId',
                    to: 'users.id'
                }
            }

        };
    }
};

export default BookingState;