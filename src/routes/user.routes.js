import controller from '../controllers/user.controller';
import RoutesProvider from '../providers/RoutesProvider';

const provider = new RoutesProvider();

provider.prefix = "users";

provider.routes = [
    {
        method: 'get',
        path: [],
        handler: controller.list
    },
    {
        method: 'get',
        path: ["{user}"],
        handler: controller.show
    },
    {
        method: 'get',
        path: ["{user}/bookings"],
        handler: controller.listUserBookings
    },
    {
        method: 'get',
        path: ["{user}/reviews"],
        handler: controller.listUserReviews
    },
];

export default provider;
