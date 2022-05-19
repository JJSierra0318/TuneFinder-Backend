const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const data = request.body
  
  //console.log(data)

  const user = new User({
    id: data.id,
    username: data.display_name,
    uri: data.uri
  })

  const checkUser = await User.findOne({ username: data.display_name }) //Check if user is already saved on the database
  if (!checkUser) { //If the user isn't in the database, save it
    try {
      const savedUser = await user.save()
    } catch (error) {
      console.log(error)
    }
  }
  response.json(user)
})

module.exports = loginRouter