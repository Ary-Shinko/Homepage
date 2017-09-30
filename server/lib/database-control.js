const mongodb = require('mongodb')
const log = require('../bin/log')
const { DATABASE_URL } = require('../server-config')

const MongoClient = mongodb.MongoClient

function connectDb(callback) {
  MongoClient.connect(DATABASE_URL, (err, db) => {
    if (err) {
      log('DB-CNCT', 'red', `Mongodb connect error`, 'localhost')
      return false
    }
    callback(db)
  })
}

function insertToCollection(data, collection, db, callback) {  
  db.collection(collection).insert(data, (err, result) => { 
    if (err) {
      log('DB-INSR', 'red', `Mongodb insert error`, 'localhost')
      return false
    }
    callback(result)
  })
}

function findFromCollection(data, collection, db, callback) {  
  db.collection(collection).find(data).toArray((err, result) => { 
    if (err) {
      log('DB-FIND', 'red', `Mongodb find error`, 'localhost')
      return false
    }
    callback(result)
  })
}

function updateFromCollection(data, newData, collection, db, callback) {  
  db.collection(collection).update(data, { $set: newData }, (err, result) => { 
    if (err) {
      log('DB-UPDT', 'red', `Mongodb update error`, 'localhost')
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
  },
  updateData (data, newData, collection) {
    connectDb(db => {
      updateFromCollection(data, newData, collection, db, result => {
        db.close()
      })
    })
  },
}
