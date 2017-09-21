const SMSClient = require('@alicloud/sms-sdk')
const { SMS_ACCESS_KEY_ID, SMS_SECRET_ACCESS_KEY } = require('../server-config')

let accessKeyId = SMS_ACCESS_KEY_ID
let secretAccessKey = SMS_SECRET_ACCESS_KEY
let smsClient = new SMSClient({ accessKeyId, secretAccessKey })

module.exports = {
  sendSMS (phone=null, vcode=null, onSucceeded, onFailed) {
    if (phone.toString().match(/^1\d{10}$/)) {
      onSucceeded()
      // smsClient.sendSMS({
      //   PhoneNumbers: phone,
      //   SignName: 'Ary实验室',
      //   TemplateCode: 'SMS_94760088',
      //   TemplateParam: `{"verification":"${vcode}"}`
      // }).then(function (res) {
      //   if (res.Code === 'OK') {
      //     onSucceeded()
      //   }
      // }, function (err) {
      //   onFailed(err)
      // })
    }
  }
}
