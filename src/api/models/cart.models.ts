import mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true },
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },

}, { timestamps: { createdAt: 'created_date' } })

module.exports = mongoose.model('cart', cartSchema)