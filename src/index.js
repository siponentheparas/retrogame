const express = require('express')
const app = express()
const port = 3000

const { data, saveData } = require('./data');

const gameRoutes = require('./routes/game')



app.get('/api', (_req, res) => {
  res.sendStatus(200)
})

app.use('/api/game', gameRoutes)

let server = app.listen(port, () => {
  console.log(`Retrogame backend, listening on port: ${port}`)
})

process.once('SIGINT', function (code) {
  console.log("SIGINT received")
  console.log("Saving game data")
  saveData()
  console.log("Closing server")
  server.close()
})

process.once('SIGTERM', function (code) {
  console.log('SIGTERM received')
  console.log("Saving game data")
  saveData()
  console.log("Closing server")
  server.close()
});
