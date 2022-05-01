import mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    product_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    }

}, { timestamps: { createdAt: 'created_date' } })

module.exports = mongoose.model('reviews', reviewSchema)