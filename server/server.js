'use strict'
let express = require('express')
let bodyParser = require('body-parser')
let app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.option('/access', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.post('/access', (req, res) => {
  if (req.body.account === 'shineax@qq.com') {
    console.log(11111111111111111111)
    res.send('F2ijrnj1oiJE12ejej')
  } else {
    res.send('Error')
  }
})

let server = app.listen(8081, () => {
  let host = server.address().address
  let post = server.address().port
  console.log(`Diamond is listening at http://${host}:${post}`)
})