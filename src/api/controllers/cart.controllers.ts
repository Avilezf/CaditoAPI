import { Request, Response } from "express";

const { getCartService, 
    addToCartService, 
    deleteFromCartService, 
    buyCartService,
    getHistoryCartService } = require('../services/post.services');


const getCart = async (request : Request, response : Response) => {
    return getCartService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const addToCart = async (request : Request, response : Response) => {
    return addToCartService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const deleteFromCart = async (request : Request, response : Response) => {
    return deleteFromCartService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const buyCart = async (request : Request, response : Response) => {
    return buyCartService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const getHistoryCart = async (request : Request, response : Response) => {
    return getHistoryCartService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

module.exports = {getCart, addToCart, deleteFromCart, buyCart, getHistoryCart}