const dbAsync = require('../lib/database-control-async')
const jwt = require('../lib/json-web-token')
const log = require('../bin/log')

function abstructTitleFromUrl (url) {
  switch (url) {
    case '/article/blog':
      return 'Code Library & Blog'
    case '/article/algorithm':
      return 'Mathematics & Algorithm'
    case '/article/app':
      return 'App Laboratory'
    default:
      return decodeURIComponent(url).match(/^\/article\/(?:(?:algorithm)|(?:blog)|(?:app))\/(.*$)/)[1]
  }
}

function encodeText (text) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function decodeText (text) {
  return text.replace(/&quot;/g, '"')
}

function encodeObject (obj) {
  let encodedObj = {}
  for (item in obj) {
    if (typeof obj[item] !== 'string') {
      encodedObj.keywords = []
      obj[item].map((keyword, index) => {
        encodedObj.keywords[index] = keyword.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      })
    } else {
      encodedObj[item] = obj[item].replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    }
  }
  return encodedObj
}

function decodeObject (obj) {
  let decodedObj = {}
  for (item in obj) {
    if (typeof obj[item] !== 'string') {
      decodedObj.keywords = []
      obj[item].map((keyword, index) => {
        decodedObj.keywords[index] = keyword.replace(/&quot;/g, '"').replace(/&amp;/g, '&')
      })
    } else {
      decodedObj[item] = obj[item].replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    }
  }
  return decodedObj
}

function decodeArray (obj) {
  return obj.map(item => {
    return item.replace(/&quot;/g, '"')
  })
}

module.exports = {
  getArticleList (req, res) {
    let type = req.url === '/article/blog' ? 'Blog' : 'Algorithm'
    dbAsync.findDataAsync({ type }, 'article', result => {
      log('ARTICLE', 'green', `Done. List[${type}]`, req.ip)
      res.json({
        status: true,
        message: `List "${type}" updated.`,
        time: Date.now(),
        data: {
          title: '',
          content: result.reverse().map(obj => {
            return decodeObject(obj)
          }),
          author: '',
          date: '',
          keywords: ['', '', '', ''],
          license: '',
          type
        }
      })
    }, err => {
      log('ARTICLE', 'red', `${err} List[${type}]`, req.ip)
      res.json({
        status: false,
        message: `Server error.`,
        time: Date.now()
      })
    })
  },
  getAppList (req, res) {
    log('ARTICLE', 'green', `Done. List[App]`, req.ip)
    res.json({
      status: true,
      message: `List "App" updated.`,
      time: Date.now(),
      data: {
        title: '',
        content: [
          {title: 'Werewolves', type: 'App', author: 'Ary', date:'2017/08/13', license:'/werewolves', keywords: ['Werewolves', 'Multiplayer Game', 'Social']},
          {title: 'Solitaire "Texas Hold\'em Poker"', type: 'App', author: 'Ary', date:'2017/09/05', license:'/solitaire', keywords: ['Solitaire', 'Game', 'Poker']},
          {title: 'Shadowsocks proxy', type: 'App', author: 'Ary', date:'2017/10/02', license:'/shadowsocks', keywords: ['Shadowsocks', 'Network', 'Proxy']},
          {title: 'Tarot, divination and fortune telling', type: 'App', author: 'Ary', date:'2017/10/21', license:'/tarot', keywords: ['Tarot', 'Game', 'Divination']},
          {title: 'Tapcity, to be a mayor as city manager', type: 'App', author: 'Ary', date:'20XX/XX/XX', license:'/tapcity', keywords: ['Tapcity', 'Game', 'Lowpoly']}
        ].reverse(),
        author: '',
        date: '',
        keywords: ['', '', '', ''],
        license: '',
        type: 'App'
      }
    })
  },
  getArticle (req, res) {
    let title = abstructTitleFromUrl(req.url)
    let internalTitle = encodeText(title)
    dbAsync.findMultiDataAsync([{ title: internalTitle }, { title: internalTitle }], ['article_content', 'article'], result => {
      if (result[0][0]) {
        log('ARTICLE', 'green', `Done. Title[${title}]`, req.ip)
        res.json({
          status: true,
          message: `Article "${title}" found.`,
          time: Date.now(),
          data: {
            title: decodeText(result[0][0].title),
            content: decodeText(result[0][0].content),
            author: decodeText(result[1][0].author),
            date: decodeText(result[1][0].date),
            keywords: decodeArray(result[1][0].keywords),
            type: decodeText(result[1][0].type),
            license: decodeText(result[1][0].license)
          }
        })
      } else {
        log('ARTICLE', 'yellow', `Not found. Title[${title}]`, req.ip)
        res.json({
          status: false,
          message: `Article "${title}" was not found.`,
          time: Date.now()
        })
      }
    }, err => {
      log('ARTICLE', 'red', `${err} Title[${title}]`, req.ip)
      res.json({
        status: false,
        message: `Server error.`,
        time: Date.now()
      })
    })
  },
  submitArticle (req, res) {
    let token = req.headers['authorization']
    jwt.verifyToken(token)
    .then(decoded => {
      return new Promise((resolve, reject) => {
        dbAsync.findDataAsync({ account: decoded.account }, 'users', result => {
          if (decoded.jti < result[0].tokenVersion) {
            // Token expired: low version
            log('ARTICLE', 'yellow', `Token low version. Account[${decoded.account}]`, req.ip)
            res.json({
              status: false,
              message: `Token version expired. Please sign in again.`,
              time: Date.now()
            })
          } else {
            // Success
            // Check if title existed
            let { content, type, author, date, keywords, license, title } = req.body
            dbAsync.findDataAsync({ title }, 'article', result => {
              if (result[0]) {
                // Article existed
                log('ARTICLE', 'yellow', `Title existed[${title}]`, req.ip)
                res.json({
                  status: false,
                  message: `Article "${title}" existed.`,
                  time: Date.now()
                })
              } else {
                // Insert article to database
                let articleData = encodeObject({ title, type, author, date, keywords, license })
                let articleContentData = encodeObject({ title, content })
                dbAsync.insertMultiDataAsync([articleContentData, articleData], ['article_content', 'article'], result => {
                  log('ARTICLE', 'green', `Submit done. Title[${title}]`, req.ip)
                  res.json({
                    status: true,
                    message: `Article "${title}" submitted succeeded.`,
                    time: Date.now()
                  })
                }, err => {
                  log('ARTICLE', 'red', `${err} Title[${err}]`, req.ip)
                  res.json({
                    status: false,
                    message: `Server error.`,
                    time: Date.now()
                  })
                })
              }
            }, err => {
              log('ARTICLE', 'red', `${err} Title[${err}]`, req.ip)
              res.json({
                status: false,
                message: `Server error.`,
                time: Date.now()
              })
            })
          }
        }, err => {
          // Token expired: time out
          log('ARTICLE', 'yellow', `Token expired. Account[${decoded.account}]`, req.ip)
          res.json({
            status: false,
            message: `Token expired. Please sign in again.`,
            time: Date.now()
          })
        })
      })
    })
    .catch(err => {
      log('ARTICLE', 'yellow', `Token error[${err}]`, req.ip)
      res.json({
        status: false,
        message: `Token expired. Please sign in again.`,
        time: Date.now()
      })
    })
  }
}
