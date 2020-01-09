import controller from '../controllers/household.controller';
import RoutesProvider from '../providers/RoutesProvider';

const provider = new RoutesProvider();

provider.prefix = "households";

provider.routes = [
    {
        method: 'get',
        path: [],
        handler: controller.list
    },
    {
        method: 'get',
        path: ["{household}"],
        handler: controller.show
    },
];

export default provider;
