const express = require('express')
const app = express()

//basic template for artists
let artists = [
  {
    id: 1,
    name:'TOOL',
    followers: 2500000,
    genres: [
      'Alternative Metal',
      'Metal',
      'Alternative Rock',
      'Art Rock',
      'Progressive Metal'
    ],
    albums: [
      'Fear Inoculum',
      '10,000 Days',
      'Lateralus',
      'AEnima',
      'Undertow'
    ],
    //songs
  },
  {
    id: 2,
    name:'FAKE TYPE.',
    followers:'50000',
    genres: [
      'vocaliod',
      'anime rock',
      'otacore'
    ],
    albums: [
      'FAKE LAND',
      'FAKE WORLD',
      'FAKE BOOK',
      'FAKE BOX',
      'FAKE JAZZ'
    ],
    //songs
  }
]

app.get('/', (request, response) => {
  response.send('<p>Initial Server config</p>')
})

app.get('/api/artists', (request, response) => {
  response.json(artists)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})