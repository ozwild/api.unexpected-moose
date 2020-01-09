import Knex from 'knex';
/* import knexPaginator from 'knex-paginator'; */
/* import { Request } from '@hapi/hapi'; */
import { Model } from 'objection';
import knexConfig from '../knexfile';

export const startKnex = () => {
    const knexInstance = Knex(knexConfig);

    Model.knex(knexInstance);
    /* knexPaginator(knexInstance); */

    return knexInstance;
};