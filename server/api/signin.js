const jwt = require('../lib/json-web-token')
const sms = require('../lib/short-message')
const db = require('../lib/database-control')
const log = require('../bin/log')

let vcodeStack = {}
let tokenVersionStack = {}

function setTokenVersion (account, tokenVersion) {
  db.updateData({ account }, { tokenVersion }, 'users')
}

function generateVcode (phone) {
  let vcode = parseInt(Math.random() * 10000 + 10000).toString().substring(1)
  vcodeStack[phone] = [vcode, Date.now()]
  return vcode
}

function checkVcodePrepared (phone) {
  let record = vcodeStack[phone]
  if (record && Date.now() - record[1] < 600000) {
    return false
  } 
  return true
}

function getVcode (phone) {
  let record = vcodeStack[phone]
  if (record && Date.now() - record[1] < 600000) {
    return record[0]
  } 
}

function authenticate (account, password, ip, onValid, onInvalid) {
  db.findData({ account }, 'users', result => {
    if (result.length !== 0) {
      if (result[0]['account'] === account && result[0]['password'] === password) {
        onValid(result[0])
      } else {
        log('SIGN-IN', 'yellow', `Wrong password [${account}]`, ip)  
        onInvalid()
      }
    } else {
      log('SIGN-IN', 'yellow', `Account not found [${account}]`, ip)  
      onInvalid()
    }
  })
}

module.exports = {
  signinMain (req, res) {
    let requestAccount = req.body.account
    let requestPassword = req.body.password
    authenticate(requestAccount, requestPassword, req.ip, profile => {
      let { account, name, phone, avatar, tokenVersion } = profile
      phone = phone.replace(/\d{4}(?=\d{4}$)/, '****')
      tokenVersion++
      setTokenVersion(account, tokenVersion)
      tokenVersionStack[account] = tokenVersion
      let token = jwt.generateToken(account, tokenVersion)
      log('SIGN-IN', 'green', `Signin account [${account}]`, req.ip)  
      res.json({
        status: true,
        message: `Welcome back, ${name}.`,
        time: Date.now(),
        data: {
          name,
          phone,
          token,
          avatar
        }
      })
    }, () => {
      res.json({
        status: false,
        message: 'Authentication failed. Please check your input.',
        time: Date.now()
      })
    })
  },
  signinSendVcode (req, res) {
    let phone = req.body.phone
    if (checkVcodePrepared(phone)) {
      let vcode = generateVcode(phone)
      sms.sendSMS(phone, vcode, () => {
        log('REG-SMS', 'blue', `Vcode [${vcode}] has been sent to [${phone}]`, req.ip)  
        res.json({
          status: true,
          message: `The verification code has been already sent to ${phone}, don't forget to check your inbox.`,
          time: Date.now()
        })
      }, err => {  
        log('REG-SMS', 'red', `Server Error. [${phone}]`, req.ip)  
        res.json({
          status: false,
          message: 'Oops, there is something wrong occured on the SMS server.',
          time: Date.now()
        })
      })
    } else {    
      log('REG-SMS', 'yellow', `Vcode requested too frequently [${phone}]`, req.ip)
      res.json({
        status: false,
        message: 'You are limited to request 1 verification code every 10 minutes.',
        time: Date.now()
      })
    }
  },
  signinCreate (req, res) {
    let { account, password, name, phone, vcode } = req.body
    let accountFlag = false
    let passwordFlag = false
    let nameFlag = false
    let phoneFlag = false
    // Check data format
    if (/^[\w-+](\.?[\w-+])*@[\w-]+(\.[\w-]+)+$/.test(account)) {
      accountFlag = true
    }
    if (/^[A-Za-z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{8,20}$/.test(password)) {
      passwordFlag = true
    }
    if (/^[\u4e00-\u9fa5\w]{2,12}$/.test(name)) {
      nameFlag = true
    }
    if (/^1\d{10}$/.test(phone)) {
      phoneFlag = true
    }
    // Check if vcode is valid
    if (vcode && vcode === getVcode(phone)) {
      // Check if data has been occupied
      if (accountFlag && nameFlag && phoneFlag) {
        let dataArray = [{ account }, { name }, { phone }]
        let accountAvailbleFlag = false
        let nameAvailbleFlag = false
        let phoneAvailbleFlag = false
        let prompt = []
        db.findMultiData(dataArray, 'users', resultArray => {
          if (resultArray[0].length === 0) {
            accountAvailbleFlag = true
          } else {
            prompt.push('ACCOUNT')
          }
          if (resultArray[1].length === 0) {
            nameAailbleFlag = true
          } else {
            prompt.push('USER NAME')
          }
          if (resultArray[2].length === 0) {
            phoneAvailbleFlag = true
          } else {
            prompt.push('PHONE NUMBER')
          }
          if (accountAvailbleFlag && nameAailbleFlag && phoneAvailbleFlag) {
            if (passwordFlag) {
              let data = {
                account,
                password,
                name,
                phone,
                avatar: '',
                token: '',
                tokenVersion: 0,
              }
              db.insertData(data, 'users')
              log('DB-INSR', 'blue', `Incerted account [${account}]`, req.ip)
              log('SIGN-IN', 'green', `Registered account [${account}]`, req.ip)
              res.json({
                status: true,
                message: `Hit on "Start exploring" to sign in now.`,
                time: Date.now()
              })
            }
          } else {
            if (prompt.length === 1) {
              prompt = `${prompt[0]} has`
            } else if (prompt.length === 2) {
              prompt = `${prompt[0]} and ${prompt[1]} have`
            } else {
              prompt = `${prompt[0]}, ${prompt[1]} and ${prompt[2]} have`
            }
            log('SIGN-IN', 'yellow', `Repeating register on [${account}]`, req.ip)
            res.json({
              status: false,
              message: `The ${prompt} been used. You should pick another instead.`,
              time: Date.now()
            })
          }
        })
      }
    } else {
      log('SIGN-IN', 'yellow', `Bad vcode on [${phone}]`, req.ip)
      res.json({
        status: false,
        message: 'The verification code is not matched, please check it.',
        time: Date.now()
      })
    }
  },
  signinForget (req, res) {
    log('SIGN-IN', 'green', `Forget account [${req.body.account}]`, req.ip)
    res.json({
      status: true,
      message: 'Not developed yet.',
      time: Date.now()
    })
  }
}
