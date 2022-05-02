import chai = require('chai');
const expect = chai.expect;
let reviewModels = require('../../api/models/review.models');

describe('Review model', () => {
    it('should', (done) => {
        let review = new reviewModels();

        review.validate((err:any) => {
            expect(err.errors.name).to.exist;
            expect(err.errors.username).to.exist;
            expect(err.errors.password).to.exist;

            done();
        });
    });
});

