/* require( 'babel-core/register'); */
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const connectionString = process.env.DB_URL;

const configurations = {

    development: {

        migrations: { 
            tableName: 'knex_migrations',
            directory: './database/migrations'
        },
        seeds: { 
            tableName: './seeds',
            directory: './database/seeds'
        },
        client: 'pg',
        connection: connectionString

    }

};

export default configurations[env];

