import RoutesProvider from '../providers/RoutesProvider';

import testRoutesProvider from './test.routes';
import userRoutesProvider from './user.routes';
import assetRoutesProvider from './asset.routes';
import bookingRoutesProvider from './booking.routes';
import householdRoutesProvider from './household.routes';


const provider = new RoutesProvider();

provider.prefix = "api";

provider.routes = [].concat(
    testRoutesProvider.getRoutes(),
    userRoutesProvider.getRoutes(),
    assetRoutesProvider.getRoutes(),
    bookingRoutesProvider.getRoutes(),
    householdRoutesProvider.getRoutes(),
);

export default provider.getRoutes().map(route => {
    route.path = `/${route.path.join('/')}`;
    return route;
});