import Hapi from '@hapi/hapi';
import consoleLogging from './plugins/consoleLogging';
import blipp from 'blipp';
import routes from './routes';

export const startServer = async () => {

    const { PORT } = process.env;

    const server = Hapi.server({
        port: PORT,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    server.route(routes);

    await server.register([consoleLogging, blipp]);
    
    await server.start();

    console.log('Server running on %s', server.info.uri);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});