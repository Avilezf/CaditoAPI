import { Request, Response } from "express";

const { userPostService, 
    lastPostService, 
    getPostService, 
    createPostService,
    createReviewService,
    getReviewService } = require('../services/post.services');


const userPost = async (request : Request, response : Response) => {
    return userPostService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const lastPost = async (request : Request, response : Response) => {
    return lastPostService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const getPost = async (request : Request, response : Response) => {
    return getPostService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const createPost = async (request : Request, response : Response) => {
    return createPostService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const createReview = async (request : Request, response : Response) => {
    return createReviewService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

const getReview = async (request : Request, response : Response) => {
    return getReviewService(request)
        .then((data:any) => {
            response.json(data);
        })
        .catch((err:any) => {
            response.status(err.status).send(err.data);
        });
}

module.exports = {userPost, lastPost, getPost, createPost, createReview, getReview}