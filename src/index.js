//configuracion de Express
import app from './app'
import './database'

const port = 3000

app.listen(port)
console.log('Connected correctly to server on port: ' + port)
