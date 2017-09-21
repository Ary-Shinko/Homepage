let http = require('http')
let https = require('https')
let express = require('express')
let bodyParser = require('body-parser')

let routes = require('./routes/main')
let redirectRoutes = require('./routes/redicect')
let credentials = require('./bin/credentials')
let color = require('./bin/color-fonts')
const { SERVER_SSLPORT, SERVER_REDIRECTPORT } = require('./server-config')

let app = express()
let redirectApp = express()

// Main SSL server
app.set('x-powered-by', false)
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
routes(app)
app.use(express.static(__dirname + '/dist'))

// Redirect server
redirectApp.set('x-powered-by', false)
redirectRoutes(redirectApp)

// Start servers
https.createServer(credentials, app).listen(SERVER_SSLPORT, () => console.log(color('[HTTPS]', 'white', 'black'), ' Server port:', SERVER_SSLPORT))
http.createServer(redirectApp).listen(SERVER_REDIRECTPORT, () => console.log(color('[HTTP]', 'white', 'black'), ' Redirect port:', SERVER_REDIRECTPORT))
