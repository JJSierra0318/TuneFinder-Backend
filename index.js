const http = require('http')

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

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(artists))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)