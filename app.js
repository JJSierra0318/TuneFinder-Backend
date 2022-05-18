const express = require('express')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')

app.use(cors())
app.use(express.json())
app.use('/api/login', loginRouter)

module.exports = app