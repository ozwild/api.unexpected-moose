import Household from '../models/household.model';

const pageSize = 25;

export default  {
    async list(request, h){

        const page = request.query.page || 0;
        return Household.query().page(page, pageSize)
        .catch(error => h.response(error.toString()).code(400))

    },
    async store(request, h){

    }, 
    async show(request, h){

        const id = request.params.household;
        return Household.query()
        .where('id',id)
        .withGraphFetched('members')
        .catch(error => h.response(error.toString()).code(400))

    },
    async update(request, h){

    },
    async delete(request, h){

    }
};

