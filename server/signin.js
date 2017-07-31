let jwt = require('jsonwebtoken')

let tokenMap = new Map()

module.exports = {
  authenticate (id, password) {
    if (id === 'shineax@qq.com' && password === '12345678') {
      return id
    } else {
      return false
    }
  },
  setVersion (id) {
    let version = tokenMap.get(id)
    if (!version) {
      tokenMap.set(id, 1)
      return 1
    } else {
      tokenMap.set(id, version + 1)
      version = version + 1
      return version
    }
  },
  generateToken (id, version) {
    return jwt.sign({
      id
    }, 'use strict // OPEN STRICT', {
      expiresIn: '20 days',
      jwtid: String(version),
      issuer: 'Ary Lab'
    })
  },
  logSignin (id, version, status) {
    if (status) {
      console.log(`SUC | ${String(new Date().getTime()).padStart(15, ' ')} | ${String(version).padStart(5, ' ')} | ${id}`)
    } else {
      console.log(`ERR | ${String(new Date().getTime()).padStart(15, ' ')} | ----- | ${id}`)
    }
  }
}
