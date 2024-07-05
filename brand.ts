import * as supertest from 'supertest';
import config from './config/base.config';
const request = supertest(config.baseURL);
const data = {
    "brand_name" : "Brand" + Math.floor(Math.random() * 1000),
    "brand_id" : Math.floor(Math.random() * 100),
    "brand_origin_year" : Math.floor(Math.random() *10000),
    "brand_origin_country" : "Country" + Math.floor(Math.random() * 10)
}
module.exports = {
    data
}