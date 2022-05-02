import chai = require('chai');
const expect = chai.expect;
let postModels = require('../../api/models/user.models');

describe('Post model', () => {
    it('should', (done) => {
        let post = new postModels();

        post.validate((err:any) => {
            expect(err.errors.owner_id).to.exist;
            expect(err.errors.img_url).to.exist;
            expect(err.errors.display_name).to.exist;
            expect(err.errors.description).to.exist;
            expect(err.errors.price).to.exist;

            done();
        });
    });
});

