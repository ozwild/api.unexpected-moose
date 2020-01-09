import controller from '../controllers/booking.controller';
import RoutesProvider from '../providers/RoutesProvider';

const provider = new RoutesProvider();

provider.prefix = "bookings";

provider.routes = [
    {
        method: 'get',
        path: [],
        handler: controller.list
    },
];

export default provider;
