const signin = require('../api/signin')
const article = require('../api/article')
const shadowsocks = require('../api/shadowsocks')

module.exports = function (app) {
  // CORS for local development
  app.options('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
  })
  app.post('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
  })
  app.get('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
  })
  // Signin API
  app.post('/signin/main', signin.signinMain)
  app.post('/signin/forget', signin.signinForget)
  app.post('/signin/create/requestvcode', signin.signinSendVcode)
  app.post('/signin/create', signin.signinCreate)
  // Article API
  app.get('/article/blog/*', article.getArticle)
  app.get('/article/algorithm/*', article.getArticle)
  app.get('/article/blog', article.getArticleList)
  app.get('/article/algorithm', article.getArticleList)
  app.get('/article/app', article.getAppList)
  app.post('/article/submit', article.submitArticle)
  // Shadowsocks API
  app.get('/shadowsocks/info', shadowsocks.getInfo)
  // Redirect for SPA index
  app.get('*', function (req, res, next) {
    req.url = '/index.html'
    next()
  })
}
