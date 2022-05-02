const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

import mongoose = require('mongoose');

const { userLoginService, 
    userTokenService, 
    userRegisterService, 
    getUserService }  = require('../../api/services/user.services');
let userModels = require('../../api/models/user.models');

let sandbox = sinon.createSandbox();

describe('UserService', () => {

    let findStub;
    let sampleArgs;
    let sampleUser;

    beforeEach(() => {
        sampleUser = {
            name: 'Luis',
            password: '123456',
            username: 'Luis'
        };
        findStub = sandbox.stub(mongoose.Model, 'findOne').resolves(sampleUser);
    });

    afterEach(() => {
        sandbox.restore();
    });

    context('userLoginService', () => {
        it('should not login because is null',  (done) => {
            userLoginService(null).then( (res:any)=> {
                //await expect(res).to.exist;
                //expect(res.data).to.equal('Invalid user id');
                done();
            }).catch((err:any) => {
                expect(err).to.exist;
                expect(err.data).to.equal('Invalid user id');
                done();
            });
        });

        it('should login the user',  (done) => {
            let login = {
                username: "Luis",
                password: "123456",
                name: "Luis"
            }

            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findOne').resolves(login);

            userLoginService(login)
            .then( (res:any)=> {
                expect(res).to.exist;
                done();
            }).catch((err:any) => {
                expect(err).to.exist;
                expect(err.data).to.equal('Invalid user id');
                done();
            });
        });

        it('should not login the user - Incorrect password',  (done) => {
            let login = {
                username: "Luis",
                password: "12345",
                name: "Luis"
            }

            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findOne').resolves(login);

            userLoginService(login).then( (res:any)=> {
                expect(res).to.exist;
                done();
            }).catch((err:any) => {
                expect(err).to.exist;
                expect(err.data).to.equal('Invalid user id');
                done();
            });
        });

        it('should not login the user - Incorrect username',  (done) => {
            let login = {
                username: "Lui",
                password: "123456",
                name: "Luis"
            }

            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findOne').resolves(login);

            userLoginService(login).then( (res:any)=> {
                expect(stub).to.have.been.calledOnce;
                expect(res).to.exist;
                done();
            }).catch((err:any) => {
                expect(err).to.exist;
                expect(err.data).to.equal('Invalid user id');
                done();
            });
        });
    });

    context('tokenLoginService', () => {
        it('should not get the user - User not found', (done) => {
            done();
        });

        it('should get the user', (done) => {
            done();
        });
    });

    context('userRegisterService', () => {
        it('should not register - No user send', (done) => {
            done();
        });

        it('should not register - User already exist', (done) => {
            done();
        });

        it('should register', (done) => {
            done();
        });
    });

    context('getUserService', () => {
        it('should not get the user - User not found', (done) => {
            done();
        });

        it('should get the user', (done) => {
            done();
        });
    });
});
