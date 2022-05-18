const loginRouter = require('express').Router()

loginRouter.post('/', async (request, response) => {
  const data = request.body
  console.log(data)
  response.json(data)
})

module.exports = loginRouter