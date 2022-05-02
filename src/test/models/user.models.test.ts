import chai = require('chai');
const expect = chai.expect;
let userModels = require('../../api/models/user.models');

describe('User model', () => {
    it('should', (done) => {
        let user = new userModels();

        user.validate((err:any) => {
            expect(err.errors.name).to.exist;
            expect(err.errors.username).to.exist;
            expect(err.errors.password).to.exist;

            done();
        });
    });
});

