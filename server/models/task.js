const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema =  new Schema({
    task: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
        },

    projectId:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
        },

    userId:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
        },

    startDate: 
        {
        type: Date,
        default: Date.now
        },

    dueDate: 
        {
        type: Date,
        required: true
        },

    status: {
        type: String,
        default: "To Do"
        },

    comment: {
        type: [{
            type: String,  
        }],
        default: ['']
        }, 
}) 

const task = mongoose.model('task', taskSchema)

module.exports =  task;
