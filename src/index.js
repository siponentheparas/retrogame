const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = 3000

const { saveData } = require('./data');

const gameRoutes = require('./routes/game')
const HOFRoutes = require('./routes/hallOfFame')

try {
  app.get('/api', (_req, res) => {
    res.sendStatus(200)
  })
  
  app.use('/api/game', gameRoutes)
  app.use('/api/hof', HOFRoutes)
  
  let server = app.listen(port, () => {
    console.log(`Retrogame backend, listening on port: ${port}`)
  })
  
  process.once('SIGINT', function (_code) {
    console.log("SIGINT received")
    console.log("Saving game data")
    saveData()
    console.log("Closing server")
    server.close()
  })
  
  process.once('SIGTERM', function (_code) {
    console.log('SIGTERM received')
    console.log("Saving game data")
    saveData()
    console.log("Closing server")
    server.close()
  });
} catch(e) {
  console.log("Unhandled error: " + e);
  saveData()
}

