const { SERVER_DOMAIN, SERVER_SSLPORT } = require('../server-config')
const log = require('../bin/log')

module.exports = function (app) {
  app.all('*', function (req, res, next) {
    log('HTTP---', 'white', `Redirect from [${req.originalUrl}]`, req.ip)
    res.redirect(301, SERVER_DOMAIN + ':' + SERVER_SSLPORT + req.originalUrl)
    res.end()
  })
}
