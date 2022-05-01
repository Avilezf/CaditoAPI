 import { Router, Request, Response } from "express";

 const { getCart, 
    addToCart, 
    deleteFromCart, 
    buyCart, 
    getHistoryCart } = require('../controllers/cart.controllers');

const cartRoutes = Router();


//Get post from car
cartRoutes.get('/', getCart);

//add Posts to car
cartRoutes.post('/add', addToCart);

//Delete post from the car
cartRoutes.post('/delete', deleteFromCart);

//"Buy" car
cartRoutes.post('/buy', buyCart);

//Get history of purchase
cartRoutes.get('/history', getHistoryCart);

export default cartRoutes;