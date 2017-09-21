// Https misc
let fs = require('fs')
let path = require('path')

let CertificateAuthority = fs.readFileSync(path.join(__dirname, '../cert/arylab.ca-bundle'))
let privateKey = fs.readFileSync(path.join(__dirname, '../cert/arylab.key'))
let certificate = fs.readFileSync(path.join(__dirname, '../cert/arylab.crt'))
let credentials = {
  ca: CertificateAuthority,
  key: privateKey,
  cert: certificate
}

module.exports = credentials
