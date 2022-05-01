const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    
    product_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },

})

module.exports = mongoose.model('history', historySchema)