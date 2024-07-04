import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseURL);
class brandController {
    getBrands() {
        return request
            .get('/brands');
    }

    getBrandsById(postId) {
        return request
            .get(`/brands/${postId}`);
    }

    postBrand(data) {
        return request
            .post('/brands')
            .send(data);
    }

    patchBrand(postBrand_id, data) {
        return request
            .patch(`/brands/${postBrand_id}`)
            .send(data);
    }

    deleteBrand(postBrand_id) {
        return request
            .delete(`/brands/${postBrand_id}`);
    }
}

export default new brandController();