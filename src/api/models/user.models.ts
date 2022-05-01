import mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: [ true, 'The username is required']
    },
    name: {
        type : String,
        unique: true,
        required: [ true, 'The name is required']
    },
    password: {
        type : String,
        required: [ true, 'The password is required']
    }

}); 


module.exports = mongoose.model('users', userSchema);