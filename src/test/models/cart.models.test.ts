import chai = require('chai');
const expect = chai.expect;
let cartModels = require('../../api/models/user.models');

describe('Cart model', () => {
    it('should', (done) => {
        let cart = new cartModels();

        cart.validate((err:any) => {
            expect(err.errors.product_id).to.exist;
            expect(err.errors.user_id).to.exist;

            done();
        });
    });
});

