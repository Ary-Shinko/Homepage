const colorize = require('./colorize')

module.exports = function log (label, color, info, rawIp) {
  let ipMatch = rawIp.match(/\d+\.\d+\.\d+\.\d+$/)
  let logString = colorize(`[${label}]`, color) + ` ${info} IP[${ipMatch ? ipMatch[0] : rawIp}] Time[${new Date().toLocaleString()}]`
  console.log(logString)
}
