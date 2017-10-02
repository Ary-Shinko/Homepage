const dbAsync = require('../lib/database-control-async')
const jwt = require('../lib/json-web-token')
const log = require('../bin/log')

module.exports = {
  getInfo (req, res) {
    let token = req.headers['authorization']
    jwt.verifyToken(token)
    .then(decoded => {
      return new Promise((resolve, reject) => {
        dbAsync.findDataAsync({ account: decoded.account }, 'users', result => {
          if (decoded.jti < result[0].tokenVersion) {
            // Token expired: low version
            log('SHADOWS', 'yellow', `Token low version. [${decoded.account}]`, req.ip)
            res.json({
              status: false,
              message: `Token expired.`,
              time: Date.now()
            })
          } else {
            // Success
            dbAsync.findDataAsync({ account: decoded.account }, 'shadowsocks', result => {
              if (result[0]) {
                // Account existed
                log('SHADOWS', 'green', `Shadowsocks Account[${decoded.account}]`, req.ip)
                res.json({
                  status: true,
                  message: result[0].port + ' ' + result[0].password,
                  time: Date.now()
                })
              } else {
                // Not invited
                log('SHADOWS', 'yellow', `Shadowsocks not invited[${decoded.account}]`, req.ip)
                res.json({
                  status: false,
                  message: `Not invited.`,
                  time: Date.now()
                })
              }
            }, err => {
              log('SHADOWS', 'red', `${err} Shadowsocks [${decoded.account}]`, req.ip)
              res.json({
                status: false,
                message: `Server error.`,
                time: Date.now()
              })
            })
          }
        }, err => {
          // Token expired: time out
          log('SHADOWS', 'yellow', `Token time out. [${decoded.account}]`, req.ip)
          res.json({
            status: false,
            message: `Token expired.`,
            time: Date.now()
          })
        })
      })
    })
    .catch(err => {
      log('SHADOWS', 'yellow', `Shadowsock error[${err}]`, req.ip)
      res.json({
        status: false,
        message: `Server error.`,
        time: Date.now()
      })
    })
  }
}