const cartModels = require('../models/car.models');
const historyModels = require('../models/history.models');

function getCartService(req:any) {
    return new Promise( async (resolve, reject) => {
        try {
            const products = await cartModels.find({ user_id: req.query.cart_id });
            resolve(products);
        } catch (error) {
            console.log(error)
            reject({ data: "Server internal error", status: 500 });
        }
    });
}


function addToCartService(req:any) {
    return new Promise( async (resolve, reject) => {
        try {
            const newInstance = await cartModels.create(req.body);
            resolve(newInstance);
        } catch (error) {
            console.log(error);
            reject({ data: "Server internal error", status: 500 });
        }
    });
}


function deleteFromCartService(req:any) {
    return new Promise(async(resolve, reject) => {
        try {
            await cartModels.findByIdAndDelete(req.query.item_id)
            resolve({ data: "Deleted successfully", status:500 });
        } catch (error) {
            console.log(error)
            reject({ data: "Server internal error",status:500 });
        }
    });
}

function buyCartService(req:any) {
    return new Promise(async(resolve, reject) => {
        try {
            const products = await cartModels.find({ user_id: req.body.user_id }).sort({ created_at: -1 })
            await Promise.all(products.map((product:any) => {
               return historyModels.create({ product_id: product.product_id, user_id: product.user_id })
            }))
            await cartModels.deleteMany({ user_id: req.body.user_id })
            resolve({ data: "Purchase completed successfully", status:200 });
        } catch (error) {
            console.log(error)
            reject({ data: "Server internal error", status:500 });;
        }
    });
}


function getHistoryCartService(req:any) {
    return new Promise(async(resolve, reject) => {
        try {
            const products = await historyModels.find({ user_id: req.params.user_id });
            console.log(products);
            resolve(products);
        } catch (error) {
            console.log(error);
            reject({ data: "Server internal error",status: 500 });
        }
    });
}

module.exports = { getCartService, addToCartService, deleteFromCartService, buyCartService, getHistoryCartService }