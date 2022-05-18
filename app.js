const express = require('express')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/login', loginRouter)

module.exports = app