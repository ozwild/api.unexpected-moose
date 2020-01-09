import controller from '../controllers/asset.controller';
import RoutesProvider from '../providers/RoutesProvider';

const provider = new RoutesProvider();

provider.prefix = "assets";

provider.routes = [
    {
        method: 'get',
        path: [],
        handler: controller.list
    },
];

export default provider;
