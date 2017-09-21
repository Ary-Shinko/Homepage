const { SERVER_DOMAIN, SERVER_SSLPORT } = require('../server-config')
const color = require('../bin/color-fonts')

module.exports = function (app) {
  app.all('*', function (req, res, next) {
    console.log(`${color('[HTTP]', 'white', 'black')} Redirect [${req.ip}] from [${req.originalUrl}] at [${Date.now()}]`)
    res.redirect(301, SERVER_DOMAIN + ':' + SERVER_SSLPORT + req.originalUrl)
    res.end()
  })
}
