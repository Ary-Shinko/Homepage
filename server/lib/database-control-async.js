const mongodb = require('mongodb')
const { DATABASE_URL } = require('../server-config')

const MongoClient = mongodb.MongoClient

function connectDbAsync () {
  return new Promise((resolve, reject) => {
    MongoClient.connect(DATABASE_URL, (err, db) => {
      if (err) {
        reject('Connect error.')
      } else {
        resolve(db)
      }
    })
  })
}

function executeCallbackAsync (callback) {
  return lastResolve => {
    if (Array.isArray(lastResolve)) {
      callback(lastResolve.map(resolveObj => {
        return resolveObj.result
      }))
      return Promise.resolve(lastResolve[0].db)
    } else {
      callback(lastResolve.result)
      return Promise.resolve(lastResolve.db)
    }
  }
}

function closeDatabaseAsync (db) {
  db.close()
}

function findFromCollectionAsync (data, collection) {
  return db => {
    return new Promise((resolve, reject) => {
      db.collection(collection).find(data, { _id: 0 }).toArray((err, result) => { 
        if (err) {
          reject('Find error.')
        } else {
          resolve({ result, db })
        }
      })
    })
  }
}

function insertToCollectionAsync (data, collection) {
  return db => {
    return new Promise((resolve, reject) => {
      db.collection(collection).insert(data, (err, result) => { 
        if (err) {
          reject('Insert error.')
        } else {
          resolve({ result, db })
        }
      })
    })
  }
}

function findMultiAsync (dataArray, collectionArray) {
  return db => {
    return Promise.all(dataArray.map((data, index) => {
      return new Promise((resolve, reject) => {
        db.collection(collectionArray[index]).find(data, { _id: 0 }).toArray((err, result) => { 
          if (err) {
            reject('Find multi error.')
          } else {
            resolve({ result, db })
          }
        })
      })
    }))
  }
} 

function insertMultiAsync (dataArray, collectionArray) {
  return db => {
    return Promise.all(dataArray.map((data, index) => {
      return new Promise((resolve, reject) => {
        db.collection(collectionArray[index]).insert(data, (err, result) => { 
          if (err) {
            reject('Insert multi error.')
          } else {
            resolve({ result, db })
          }
        })
      })
    }))
  }
}

module.exports = {
  findDataAsync (data, collection, onSuccess, onError) {
    connectDbAsync()
    .then(findFromCollectionAsync(data, collection))
    .then(executeCallbackAsync(onSuccess))
    .then(closeDatabaseAsync)
    .catch(onError)
  },
  findMultiDataAsync (dataArray, collectionArray, onSuccess, onError) {
    connectDbAsync()
    .then(findMultiAsync(dataArray, collectionArray))
    .then(executeCallbackAsync(onSuccess))
    .then(closeDatabaseAsync)
    .catch(onError)
  },
  insertDataAsync (data, collection, onSuccess, onError) {
    connectDbAsync()
    .then(insertToCollectionAsync(data, collection))
    .then(executeCallbackAsync(onSuccess))
    .then(closeDatabaseAsync)
    .catch(onError)
  },
  insertMultiDataAsync (dataArray, collectionArray, onSuccess, onError) {
    connectDbAsync()
    .then(insertMultiAsync(dataArray, collectionArray))
    .then(executeCallbackAsync(onSuccess))
    .then(closeDatabaseAsync)
    .catch(onError)
  }
}
