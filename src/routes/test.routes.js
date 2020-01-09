import RoutesProvider from '../providers/RoutesProvider';

const provider = new RoutesProvider();
provider.routes = [
    {
        method: 'GET',
        path: [],
        handler: (request, h) => {
            return 'Hello, hapi!';
        }
    }
];

export default provider;