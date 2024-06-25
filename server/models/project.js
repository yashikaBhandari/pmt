const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true

    },
    status: {
        type: String,
        enum: ["To Do", "In Progress", "Completed"],
        default: "To Do"
        }, 
    
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
      },

     task: {
      type: [{
        type: String,  
      }],
      default: ['']
    }, 
}) 

const project = mongoose.model('project', projectSchema)

module.exports =  project;
