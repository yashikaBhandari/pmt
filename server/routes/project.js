const express = require('express')
const Project = require('../models/project')
const User = require('../models/user')
const router = express.Router()


/* CREATE  PROJECT */
router.post('/createProject', async(req, res) => {
    try{
      if(req.session.userId) {  
        try {
          const project = new Project(req.body)
          await project.save();
          const id = project._id
          res.json(id)
        }catch(error) {
          console.log(error)
        }        
      } else{
        res.json('User not Logged in')
      }

    }catch(error) {
        res.json(error)
    }
})


/* EDIT PROJECT */
router.post('/editProject/:id', async(req, res) => {
    try{
      if(req.session.userId){
      const projectId = req.params.id
      const user = await User.findById(req.session.userId)
    
      try{  
          if(user){
              await Project.findByIdAndUpdate(projectId)
              res.json('Project updated successfully')
                } else{
              res.json('Project not found')              
            }
      }catch(error){
            console.log(error)
            res.json(error)
          }
        
      } else {
          res.send("User not logged in")
      }
    }catch(error) {
      console.log(error)
      res.json(error)
    }
})

/* DELETE PROJECT */
router.post('/deleteProject', async(req, res) => {
  try{
    const projectId = req.params.id
    const userId = req.session.id
    
    const user = await User.findById(userId)
    
    if(user){
        await Project.findByIdAndDelete(projectId)
        res.json('Project deleted successfully')
    } else{
        res.json('User not found')
    }
  }catch(error) {
      res.json(error)
}}
)



/* ALL USER PROJECTS */
router.get('/getProjects', async(req, res) => {
  try{
    if(req.session.userId){
      
      const userId = req.session.userId   
 
          const projects = await Project.find({user: req.session.userId})
          res.json(projects)

    } else {
      console.log('User is not logged in')
      res.json('User is not logged in')
    }
      
    
  }catch(error){
    console.log(error)
      res.json(error)
  }
})

/* PROJECTS DETAILS */
router.get('/projectDetails/:id', async(req, res) => {
  try{
    if(req.session.userId){
      const projectId = req.params.id;   
 
          const project = await Project.findOne({_id: projectId})
         
          res.send(project)

    } else {
      console.log('User is not logged in')
      res.json('User is not logged in')
    }
      
  }catch(error){
    console.log(error)
      res.json(error)
  }
})





module.exports = router  
