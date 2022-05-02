import chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const rewire = require('rewire');
const request = require('supertest')

let api = rewire('./api');
let sandbox = sinon.createSandbox();

describe('app', () => {
    afterEach(() => {
        api = rewire('./api');
        sandbox.restore();
    });

    context('GET', () => {
        it('should get /' ,(done) => {
            request(api).get('/')
            .expect(200)
            .end((err:any, res:any) => {
                expect(res.body).to.have.property('name').to.equal('Luis');
                done(err);
            });
        });
    });
});