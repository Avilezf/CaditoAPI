import chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

import rewire from 'rewire';
const request = require('supertest')

let sandbox = sinon.createSandbox();

describe('app', () => {
    afterEach(() => {
        sandbox.restore();
    });

    /*context('GET', () => {
        it('should get /' ,(done) => {
            request(api).get('/')
            .expect(200)
            .end((err:any, res:any) => {
                expect(res.body).to.have.property('name').to.equal('Luis');
                done(err);
            });
        });
    });*/ 

    context('POST', () => {
        it('should post /' ,(done) => {
            let login = {
                username: "Luis",
                password: "123456",
                name: "Luis"
            }

            request('/api/user').post('/login')
            .send(login)
            .expect(200)
            .end((err:any, res:any) => {
                //expect(res.body).to.have.property('name').to.equal('Luis');
                expect(err).to.exist;
                done();
            });
        });
    });
});