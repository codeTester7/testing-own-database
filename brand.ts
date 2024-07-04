import * as supertest from 'supertest';
import config from './config/base.config';
const request = supertest(config.baseURL);
const data = {
    "brand_name" : "Brand" + Math.floor(Math.random() * 1000),
    "brand_id" : Math.floor(Math.random() * 100),
    "brand_origin_year" : Math.floor(Math.random() *10000),
    "brand_origin_country" : "Country" + Math.floor(Math.random() * 10)
}
let postBrand_id;
const beforeAllHooks = () => {
    beforeAll(async () => {
        const res = await request
            .post('/brands')
            .send(data);
        postBrand_id = res.body.id;
        console.log('Created successfully...');
    });
}

const updatePatch = () => {
    test('PATCH /Update brand', async () => {
        const data1 = {
            "brand_name" : "Brand" + Math.floor(Math.random() * 1000)
        }
        const response = await request
            .patch(`/brands/${postBrand_id}`)
            .send(data1);
        expect(response.body.brand_name).toEqual(data1.brand_name);
        console.log('Updated sucessfully...');
        expect(response.statusCode).toBe(200);
    });
}

const afterAllHooks = () => {
    afterAll(async () => {
        await request.delete(`/brands/${postBrand_id}`);
        console.log('Deleted succesfully...');
    });
}

module.exports = {
    data,
    beforeAllHooks,
    postBrand_id,
    request,
    afterAllHooks,
    updatePatch
}