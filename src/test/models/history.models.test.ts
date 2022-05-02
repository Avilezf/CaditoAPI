import chai = require('chai');
const expect = chai.expect;
let historyModels = require('../../api/models/user.models');

describe('History model', () => {
    it('should', (done) => {
        let history = new historyModels();

        history.validate((err:any) => {
            expect(err.errors.product_id).to.exist;
            expect(err.errors.user_id).to.exist;

            done();
        });
    });
});

