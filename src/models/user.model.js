import { Model } from 'objection';
import BaseModel from './base.model';

class User extends BaseModel {
    
    static get tableName() {
        return 'users';
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName'],
            properties: {
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                householdId: {type: 'uuid'},
                email: { type: 'string', unique: true },
                type: {type: 'string'}
            }
        };
    };

    static get relationMappings() {
        return {
            bookings: {
                relation: Model.HasManyRelation,
                modelClass: 'booking.model',
                join: {
                    from: 'users.id',
                    to: 'bookings.userId'
                }
            },

            reviews: {
                relation: Model.HasManyRelation,
                modelClass: 'bookingState.model',
                join: {
                    from: 'users.id',
                    to: 'booking_states.userId'
                }
            },

            household: {
                relation: Model.BelongsToOneRelation,
                modelClass: 'household.model',
                join: {
                    from: 'users.householdId',
                    to: 'households.id'
                }
            }

        };
    }
};

export default User;