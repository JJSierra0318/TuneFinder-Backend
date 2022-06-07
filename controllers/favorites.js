const favoriteRouter = require('express').Router()
const User = require('../models/user')

favoriteRouter.get('/', async (request, response) => {
  const data = request.body

  const user = await User.findOne({ username: data.username })

  const favorites = user.favorites

  response.send(favorites)
})

favoriteRouter.post('/', async (request, response) => {
  const data = request.body

  const artist = data.artist.toString()
  const user = await User.findOne({ username: data.user.username })

  user.favorites = user.favorites.concat(artist)
  await user.save()

  console.log(user)

  response.json(data)
})

module.exports = favoriteRouter