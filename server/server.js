'use strict'
let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('OK!')
})

let server = app.listen(3000, () => {
  let host = server.address().address
  let post = server.address().port
  console.log(`Diamond is listening at http://${host}:${post}`)
})