const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const User = require('../models/user')


/* CREATE TASK */
router.post('/createTask', async(req, res) => {
    try{
        const task = new Task(req.body) 
        await task.save();
        res.json(task)
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
})

/* EDIT TASK */
router.post('/editTask/:id/userId', async(req, res) => {
    try{
        const taskId = req.params.id;
        const userId = req.params.userId;
        await User.findById(userId)
        if(taskId){
            await Task.findByIdAndUpdate(taskId)
            res.json("Task updated successfully")
        } else{
            res.json("Task could not be updated!")
        }
    }
    catch(error){
        res.send(error)
    }
})

/*  DELETE TASK */
router.post('/editTask/:id', async(req, res) => {
    try{
        const taskId = req.params.id;
        if(taskId){
            await Task.findByIdAndDelete(taskId)
            res.json("Task deleted successfully")
        } else{
            res.json("Task deletion failed!")
        }
    }
    catch(error){
        res.send(error)
    }
})

/* VIEW ALL ASSIGNED TASK */
router.get('/getProjects', async(req, res) => {
    try{
        const userId = req.session.userId   
        const user = await User.findById(userId) //admin
  
        if(user.role === "admin"){
            const task = await Task.find({})
            res.json(users)
        } else{
            const task = await Task.findOne({member: userId})
            res.json(task)
        }
    }catch(error){
        res.json(error)
    }
  })
  
module.exports = router