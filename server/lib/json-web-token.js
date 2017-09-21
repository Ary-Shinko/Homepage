const jwt = require('jsonwebtoken')
const { JSON_WEB_TOKEN_SECRET_KEY, JSON_WEB_TOKEN_ISSUER } = require('../server-config')

module.exports = {
  generateToken (account, version) {
    return jwt.sign({
      account
    }, JSON_WEB_TOKEN_SECRET_KEY, {
      expiresIn: '20 days',
      issuer: JSON_WEB_TOKEN_ISSUER,
      jwtid: String(version)
    })
  },
  verifyToken (token) {
    jwt.verify(token, JSON_WEB_TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(decoded.foo)
      // ..xxxxxxxxxxxxxxxxxxxxxxxxxxx
    })
  }
}
