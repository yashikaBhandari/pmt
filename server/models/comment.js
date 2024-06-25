const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    task:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task'
    },
    member:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
        },
}) 

const comment = mongoose.model('comment', commentSchema)

module.exports =  comment;
