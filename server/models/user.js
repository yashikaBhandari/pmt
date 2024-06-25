const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:['admin', 'manager', 'member'],
        default:'member'
    },
    comment:
    [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
    }],
}) 

const user = mongoose.model('user', userSchema)

module.exports =  user;
