import { Model } from 'objection';
import BaseModel  from './base.model';

class Booking extends BaseModel {
    
    static get tableName() {
        return 'bookings';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            /* required: ['userId', 'assetId'], */
            required: [],
            properties: {
                userId: { type: 'uuid', minLength: 1, maxLength: 255 },
                assetId: { type: 'uuid', minLength: 1, maxLength: 255 },
                approvalId: {type: 'uuid'},
                from: { type: 'timestamp'},
                to: { type: 'timestamp'},
                duration: {type: 'string'}
            }
        };
    };

    static get relationMappings() {
        return {
            
            states: {
                relation: Model.HasManyRelation,
                modelClass: 'bookingState.model',
                join: {
                    from: 'bookings.id',
                    to: 'booking_states.bookingId'
                }
            },

            asset: {
                relation: Model.BelongsToOneRelation,
                modelClass: 'asset.model',
                join: {
                    from: 'bookings.assetId',
                    to: 'assets.id'
                }
            }, 

            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: 'user.model',
                join: {
                    from: 'bookings.userId',
                    to: 'users.id'
                }
            }

        };
    }
};

export default Booking;