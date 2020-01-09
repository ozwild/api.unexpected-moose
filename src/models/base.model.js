import {Model} from 'objection';

const guid = require('objection-guid')();
const MixedInModel = guid(Model);

class BaseModel extends MixedInModel {
    
    static get modelPaths() {
        return [__dirname];
    }

    $beforeInsert() {
        const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        this.created_at = now;
        this.updated_at = now;
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    }

}

export default BaseModel;
