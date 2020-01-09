class RoutesProvider {


    constructor(routes = [], prefix = ""){
        this.prefix = prefix;
        this.routes = routes;
    }

    getRoutes(){
        return this.routes.map(route => {
            const path = route.path.filter(segment => !!segment);
            route.path = [this.prefix, ...path];
            return route;
        })
    }

}

export default RoutesProvider;