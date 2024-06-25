const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.SECRET;


/* AUTHENTICATION MIDDLEWARE */

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        res.json("Unauthorized")
    } else{
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if(err) return res.json("Invalid token")
            next()
        })
    }
}

/* GET USER ID */
router.get('/userId', async(req, res) => {
    try{
      if(req.session.userId) {  
        const userId = req.session.userId
            res.json({data: req.session.userId})
      }
    }catch(error){
        res.json(error)
    }
  })


/* USER SIGN UP */
router.get('/signup', async(req, res) => {
    try{
        const user = req.body;
        new User(user);

        await user.save();
        res.json(user)
    }
    catch(error){
        res.send(error)
    }
})


/* USER LOGIN */
router.post('/login', async(req, res) => {

    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            if(user.password === password){
                
                const token = jwt.sign({email: user.email}, jwtSecret, {expiresIn: '1h'})
                const userId = user._id
                req.session.userId = user._id
                res.cookie("token", token) 
                res.json('Success')
            }else {
                 res.json('Wrong credentials')
            }
        }else {
            res.json("User does not exist")
        }

    }
    catch(error){
        res.send(error)
    }
})



/* LOGIN AUTHENTICATION */
router.get('/dashboard', authMiddleware, async(req, res) => {
    try{
        return res.json("Success")
    }
    catch(error){
        res.send(error)
    }
})

/* ADD USER */
router.post('/addUser', async(req, res) => {
    try{
        const user = req.body;
        new User(user);

        await user.save();
        res.json(user)
    }
    catch(error){
        res.send(error)
    }
})

/* EDIT USER */
router.post('/edit/:id', async(req, res) => {
    try{
        const userId = req.session.userId   
        const user = await User.findById(userId) //admin
        const editUserId = req.params.id   //user
        if(user.role === "admin"){
            await User.findByIdAndUpdate({editUserId})
            res.json('User edited successfully!')
        } else{
            res.json("Permission denied!")
        }
    }catch(error){
        res.json(error)
    }
})

/* DELETE USER */
router.post('/delete/:id', async(req, res) => {
    try{
        const userId = req.session.userId   
        const user = await User.findById(userId) //admin
        const toBeDeletedUserId = req.params.id   //user
        if(user.role === "admin"){
            await User.findByIdAndDelete({toBeDeletedUserId})
            res.json('User delete successful!')
        } else{
            res.json("Permission denied!")
        }
    }catch(error){
        res.json(error)
    }
})


/* GET  USERS */
router.get('/getUsers', async(req, res) => {
    try{
        const userId = req.session.userId   
        const user = await User.findById(userId) //admin

        if(user.role === "admin"){
            const users = await User.find({})
            res.json(users)
        } else{
            res.json("Permission denied!")
        }
    }catch(error){
        res.json(error)
    }
})

module.exports = router