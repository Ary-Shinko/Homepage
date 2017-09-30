const http = require('http')
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/main')
const redirectRoutes = require('./routes/redicect')
const credentials = require('./bin/credentials')
const colorize = require('./bin/colorize')
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
https.createServer(credentials, app).listen(SERVER_SSLPORT, () => console.log(colorize('[HTTPS--]', 'white', 'black'), 'Server port:', SERVER_SSLPORT))
http.createServer(redirectApp).listen(SERVER_REDIRECTPORT, () => console.log(colorize('[HTTP---]', 'white', 'black'), 'Redirect port:', SERVER_REDIRECTPORT))
