import { Model }  from 'objection';
import BaseModel  from './base.model';

class Asset extends BaseModel {
    
    static get tableName() {
        return 'assets';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 255 },
                description: { type: 'text'},
            }
        };
    };

    static get relationMappings() {
        return {
            bookings: {
                relation: Model.HasManyRelation,
                modelClass: 'booking.model',
                join: {
                    from: 'assets.id',
                    to: 'bookings.assetId'
                }
            }
            
        };
    }
};

export default Asset;