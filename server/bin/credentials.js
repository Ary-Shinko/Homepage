// Https misc
let fs = require('fs')
let path = require('path')
const { CERT_CA_PATH, CERT_PRIVATE_KEY_PATH, CERT_CERTIFICATE_PATH } = require('../server-config')

let CertificateAuthority = fs.readFileSync(path.join(__dirname, CERT_CA_PATH))
let privateKey = fs.readFileSync(path.join(__dirname, CERT_PRIVATE_KEY_PATH))
let certificate = fs.readFileSync(path.join(__dirname, CERT_CERTIFICATE_PATH))

let credentials = {
  ca: CertificateAuthority,
  key: privateKey,
  cert: certificate
}

module.exports = credentials
