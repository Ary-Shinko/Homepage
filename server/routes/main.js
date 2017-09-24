let signin = require('../api/signin')

module.exports = function (app) {
  // Redirect for SPA index
  app.get('*', function (req, res, next) {
    req.url = '/index.html'
    next()
  })
  // CORS for local development
  app.options('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
  })
  app.post('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
  })
  // Signin API
  app.post('/signin/main', signin.signinMain)
  app.post('/signin/forget', signin.signinForget)
  app.post('/signin/create/requestvcode', signin.signinSendVcode)
  app.post('/signin/create', signin.signinCreate)
}
