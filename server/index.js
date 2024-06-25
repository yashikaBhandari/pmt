const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config();


const store = MongoStore.create({
  mongoUrl: 'mongodb://127.0.0.1:27017/PMT_DB',
  collection: "mySessions",
});


app.use(session({ 
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    store: store, 
})); 

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET","POST"],
  credentials: true
}))

app.use(cookieParser())

// CONNECTION TO DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/PMT_DB')
  .then(()=>{
  console.log('Database Connection is ready...')
  })
  .catch((err)=> {
  console.log(err);
  })

  app.use('/', require('./routes/user'))
  app.use('/', require('./routes/project'))
  app.use('/', require('./routes/task'))


  const PORT = 2001;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})