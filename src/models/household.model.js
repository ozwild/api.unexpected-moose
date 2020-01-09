import { Model } from 'objection';
import BaseModel from './base.model';

class Household extends BaseModel {
    
    static get tableName() {
        return 'households';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['address'],
            properties: {
                address: { type: 'string'},
                phone: { type: 'text'},
            }
        };
    };

    static get relationMappings() {
        return {
            members: {
                relation: Model.HasManyRelation,
                modelClass: 'user.model',
                join: {
                    from: 'households.id',
                    to: 'users.householdId'
                }
            }
            
        };
    }
};

export default Household;