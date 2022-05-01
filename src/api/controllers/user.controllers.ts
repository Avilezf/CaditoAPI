const bcryptjs = require('bcryptjs');
import { Request, Response } from "express";

const { userLoginService, 
    userTokenService, 
    userRegisterService, 
    getUserService } = require('../services/user.services');


const userLogin = async (request : Request, response : Response) => {
    return userLoginService(request)
        .then((res:any) => {
            console.log(res);
            response.status(res.status ?? 200).json(res.data ?? res);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const tokenLogin = async (request : Request, response : Response) => {

    return userTokenService(request)
    .then((res:any) => {
        response.status(res.status ?? 200).json(res.data ?? res);
    })
    .catch((err:any) => {
        response.status(err.status).send(err.data);
    });

}

const userRegister = async (request : Request, response : Response) => {

    return userRegisterService(request)
    .then((res:any) => {
        response.status(res.status ?? 200).json(res.data ?? res);
    })
    .catch((err:any) => {
        response.status(err.status).send(err.data);
    });

}

const getUser = async (request : Request, response : Response) => {
    
    return getUserService(request)
    .then((res:any) => {
        response.status(res.status ?? 200).json(res.data ?? res);
    })
    .catch((err:any) => {
        response.status(err.status).send(err.data);
    });


}


module.exports = {
    userLogin,
    tokenLogin,
    userRegister,
    getUser
}