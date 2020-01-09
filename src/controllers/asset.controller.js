import Asset from '../models/asset.model';

const pageSize = 25;

export default  {
    async list(request, h){

        const page = request.query.page || 0;
        return Asset.query().page(page, pageSize)
        .catch(error => h.response(error.toString()).code(400))

    },
    async store(request, h){

    }, 
    async show(request, h){

    },
    async update(request, h){

    },
    async delete(request, h){

    }
};

