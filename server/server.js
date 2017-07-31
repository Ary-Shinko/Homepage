let express = require('express')
let bodyParser = require('body-parser')
let { authenticate, setVersion, generateToken, logSignin } = require('./signin')

let app = express()
app.use(bodyParser.json())
app.set('x-powered-by', false)

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.post('/access', (req, res) => {
  let id = authenticate(req.body.id, req.body.password)
  if (id) {
    let version = setVersion(id)
    let token = generateToken(id, version)
    logSignin(id, version, true)
    res.send({
      token,
      name: 'Admin',
      icon: '/a.png'
    })
  } else {
    logSignin(id, null, false)
    res.status(401).send('Authentication failed.')
  }
})

let server = app.listen(8081, () => {
  let host = server.address().address
  let post = server.address().port
  console.log(`Diamond is listening at http://${host}:${post}`)
})
