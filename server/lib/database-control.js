const mongodb = require('mongodb')
const { DATABASE_URL } = require('../server-config')

let MongoClient = mongodb.MongoClient

function connectDb(callback) {
  MongoClient.connect(DATABASE_URL, (err, db) => {
    if (err) {
      console.log('####Connection Failed####', err)
      return false
    }
    callback(db)
  })
}

function insertToCollection(data, collection, db, callback) {  
  db.collection(collection).insert(data, (err, result) => { 
    if (err) {
      console.log('####Incertion Failed####', err)
      return false
    }
    callback(result)
  })
}

function findFromCollection(data, collection, db, callback) {  
  db.collection(collection).find(data).toArray((err, result) => { 
    if (err) {
      console.log('####Find Failed####', err)
      return false
    }
    callback(result)
  })
}

module.exports = {
  findData (data, collection, callback) {
    connectDb(db => {
      findFromCollection(data, collection, db, result => {
        callback(result)
        db.close()
      })
    })
  },
  findMultiData (dataArray, collection, callback) {
    function isFinished(resultArray, db, length, callback) {
      if (resultArray.length === length && !resultArray.includes(undefined)) {
        callback(resultArray)
        db.close()
      }
    }
    connectDb(db => {
      let resultArray = []
      let length = dataArray.length
      dataArray.forEach((data, index) => {
        findFromCollection(data, collection, db, result => {
          resultArray[index] = result
          isFinished(resultArray, db, length, callback)
        })
      })
    })
  },
  insertData (data, collection) {
    connectDb(db => {
      insertToCollection(data, collection, db, result => {
        db.close()
      })
    })
  }
}
