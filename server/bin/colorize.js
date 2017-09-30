 // Colorize text
 module.exports = function colorize(text, back, fore) {
  let forePrev = ''
  let foreNext = ''
  let backPrev = ''
  let backNext = ''
  if (!fore && !back) {
    return text.toString()
  }
  if (fore) {
    switch (fore) {
      case 'black':
        forePrev = '\x1B[30m'
        break
      case 'grey':
        forePrev = '\x1B[90m'
        break
      case 'gray':
        forePrev = '\x1B[90m'
        break
      case 'white':
        forePrev = '\x1B[37m'
        break
      case 'red':
        forePrev = '\x1B[31m'
        break
      case 'yellow':
        forePrev = '\x1B[33m'
        break
      case 'blue':
        forePrev = '\x1B[34m'
        break
      case 'green':
        forePrev = '\x1B[32m'
        break
      case 'cyan':
        forePrev = '\x1B[36m'
        break
      case 'magenta':
        forePrev = '\x1B[35m'
        break
    }
  } else if (back) {
    switch (back) {
      case 'black':
        forePrev = '\x1B[37m'
        break
      case 'grey':
        forePrev = '\x1B[37m'
        break
      case 'gray':
        forePrev = '\x1B[37m'
        break
      case 'white':
        forePrev = '\x1B[30m'
        break
      case 'red':
        forePrev = '\x1B[37m'
        break
      case 'yellow':
        forePrev = '\x1B[30m'
        break
      case 'blue':
        forePrev = '\x1B[37m'
        break
      case 'green':
        forePrev = '\x1B[30m'
        break
      case 'cyan':
        forerev = '\x1B[30m'
        break
      case 'magenta':
        forePrev = '\x1B[37m'
        break
    }
  }
  if (back) {
    switch (back) {
      case 'black':
        backPrev = '\x1B[40m'
        break
      case 'grey':
        backPrev = '\x1B[49;5;8m'
        break
      case 'gray':
        backPrev = '\x1B[49;5;8m'
        break
      case 'white':
        backPrev = '\x1B[47m'
        break
      case 'red':
        backPrev = '\x1B[41m'
        break
      case 'yellow':
        backPrev = '\x1B[43m'
        break
      case 'blue':
        backPrev = '\x1B[44m'
        break
      case 'green':
        backPrev = '\x1B[42m'
        break
      case 'cyan':
        backPrev = '\x1B[46m'
        break
      case 'magenta':
        backPrev = '\x1B[45m'
        break
    }
  }
  foreNext = forePrev ? '\x1B[39m' : ''
  backNext = backPrev ? '\x1B[49m' : ''
  return backPrev + forePrev + text.toString() + foreNext + backNext
}
