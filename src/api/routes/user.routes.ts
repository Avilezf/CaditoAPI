import { Router } from "express";

const { userLogin, 
    tokenLogin, 
    userRegister, 
    getUser } = require('../controllers/user.controllers');

const userRoutes = Router();


//Login User
userRoutes.post('/login', userLogin);

//Login Token
userRoutes.post('/token', tokenLogin);

//Register User
userRoutes.post('/register', userRegister);

//Get User
userRoutes.get('/', getUser);


export default userRoutes;