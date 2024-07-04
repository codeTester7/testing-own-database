import uploadController from "../controllers/upload.controller"

describe('UPLOAD FILES', () => {
    it('POST /upload/single', async () => {
        const res = await uploadController.postSingleUpload('');
        expect(res.body.filename).toEqual('');
        expect(res.statusCode).toBe(201);
        expect(res.body.length).toEqual(1);
    });

    it('POST /upload/multiple', async () => {
        const files = [];
        const res = await uploadController.postMultipleUpload(files);
        expect(res.body[0].filename).toEqual('');
        expect(res.body[1].filename).toEqual('');
        expect(res.statusCode).toBe(201);
        expect(res.body.length).toEqual(files.length);
    })
})