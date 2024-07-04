import brandController from "../controllers/brand.controller";
const {data} = require('../brand')
// Basic Get request to check api is working or not
test('GET BRANDS', async () => {
    const response = await brandController.getBrands();
    console.log(response.body);
    expect(response.statusCode).toBe(200);
});


describe('BRANDS', () => {
    describe('Fetch brand', () => {
        test('GET BRANDS', async () => {
            const response = await brandController.getBrands();
            expect(response.statusCode).toBe(200);
        });
    });
let postBrand_id;
    describe('Create brand', () => {
        test('POST BRANDS', async () => {
            const data = {
                "brand_name" : "Brand" + Math.floor(Math.random() * 1000),
                "brand_id" : 3,
                "brand_origin_year" : 2003,
                "brand_origin_country" : "China"
            }
            const response = await brandController.postBrand(data)
            postBrand_id = response.body.id;
            expect(response.statusCode).toBe(201);
            expect(response.body.brand_name).toEqual(data.brand_name);
        });
    });

    describe('Fetch Newly Created Brand', () => {
        test('GET /New Brand', async () => {
            const response = await brandController.getBrandsById(postBrand_id);
            console.log(response.body);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('UPADTE the BRAND', () => {
        // before all hook is used for post request
        beforeAll(async () => {
            const res = await brandController.postBrand(data);
            postBrand_id = res.body.id;
            console.log('Created successfully...');
        });

        // this test updates the content of newly added data (PATCH request)
        test('PATCH /Update brand', async () => {
            const data1 = {
                "brand_name" : "Brand" + Math.floor(Math.random() * 1000)
            }
            const response = await brandController.patchBrand(postBrand_id, data1);
            expect(response.body.brand_name).toEqual(data1.brand_name);
            console.log('Updated sucessfully...');
            expect(response.statusCode).toBe(200);
        });

        // after all hook is used for delete request
        afterAll(async () => {
            await brandController.deleteBrand(postBrand_id);
            console.log('Deleted succesfully...');
        })
    });

    describe('DELETE the BRAND', () => {
        test('DELETE REQUEST', async () => {
            await brandController.deleteBrand(postBrand_id);
        });
    });
}); 