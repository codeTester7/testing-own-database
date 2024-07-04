import * as supertest from 'supertest';
import config from '../config/upload.config';
const request = supertest(config.baseURL);
class UploadController {
    postSingleUpload(filepath : string) {
        return request
            .post('/upload/single')
            .attach('single', filepath);
    }

    postMultipleUpload(files : string[]) {
        const req = request
            .post('/upload/multiple')
        for(let file in files) {
            req.attach('multiple', file);
        }
        return req;
    }
}

export default new UploadController();