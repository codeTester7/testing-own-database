import brandController from "../controllers/brand.controller";

// import * as supertest from 'supertest';
const {data, beforeAllHooks, request, postBrand_id, afterAllHooks, updatePatch} = require('../brand');
// const request = supertest('http://localhost:3000');

// Basic Get request to check api is working or not
test('GET BRANDS', async () => {
    const response = await request
        .get('/brands');
    console.log(response.body);
});


describe('BRANDS', () => {
    describe('Fetch brand', () => {
        test('GET BRANDS', async () => {
            const response = await brandController.getBrands();
            expect(response.body.id).toBe(null);
        });
    });
// let postBrand_id;
    // describe('Create brand', () => {
    //     test('POST BRANDS', async () => {
    //         const data = {
    //             "brand_name" : "Brand" + Math.floor(Math.random() * 1000),
    //             "brand_id" : 3,
    //             "brand_origin_year" : 2003,
    //             "brand_origin_country" : "China"
    //         }
    //         const response = await request
    //             .post('/brands')
    //             .send(data);
    //         postBrand_id = response.body.id;
    //         expect(response.statusCode).toBe(201);
    //         expect(response.body.brand_name).toEqual(data.brand_name);
    //     });
    // });

    // describe('Fetch Newly Created Brand', () => {
    //     test('GET /New Brand', async () => {
    //         const response = await request
    //             .get(`/brands/${postBrand_id}`);
    //         console.log(response.body);
    //     });
    // });

    describe('UPADTE the BRAND', () => {
        // before all hook is used for post request
        // beforeAll(async () => {
        //     const res = await request
        //         .post('/brands')
        //         .send(data);
        //     postBrand_id = res.body.id;
        //     console.log('Created successfully...');
        // });
        beforeAllHooks();

        // this test updates the content of newly added data (PATCH request)
        // test('PATCH /Update brand', async () => {
        //     const data1 = {
        //         "brand_name" : "Brand" + Math.floor(Math.random() * 1000)
        //     }
        //     const response = await request
        //         .patch(`/brands/${postBrand_id}`)
        //         .send(data1);
        //     expect(response.body.brand_name).toEqual(data1.brand_name);
        //     console.log('Updated sucessfully...');
        //     expect(response.statusCode).toBe(200);
        // });
        updatePatch();

        // after all hook is used for delete request
        // afterAll(async () => {
        //     await request.delete(`/brands/${postBrand_id}`);
        //     console.log('Deleted succesfully...');
        // })
        afterAllHooks();
    });

    // describe('DELETE the BRAND', () => {
    //     test('DELETE REQUEST', async () => {
    //         await request.delete(`/brands/${postBrand_id}`);
    //     });
    // });
}); 