## [Mongo DB](https://www.linkedin.com/learning/learning-mongodb)
#Note
   * import file.json db  
        `mongoimport --db MONGO_DB_NAME --collection COLLECTION_NAME --jsonArray --file FILE_NAME.json`
   * to switch to db  `use MONGO_DB_NAME`
   * to show collections of db  `show collections`
   * to `get` count of specific collection  `db.COLLECTION_NAME.count()`
   * to `get` item in specific collection  `db.COLLECTION_NAME.find({"key": value})`
   * to `insert` item in specific collection  `db.COLLECTION_NAME.insert({"key": value})`
   * to `update` item in specific collection  `db.COLLECTION_NAME.update({"key": value}, {$set: {key: UPDATED_VALUE})`
   * to `update` array item in specific collection  `db.COLLECTION_NAME.update({"key": value}, {$addToSet: {key: UPDATED_VALUE})`
   * to `delete` item in specific collection  `db.COLLECTION_NAME.remove({"key": value})`
   * to `delete` specific collection  `db.COLLECTION_NAME.drop()`
   
   * Run Query without index  ` db.COLLECTION_NAME.find({"key": value}).explain("executionStats")`
   * Add Indexes  `db.COLLECTION_NAME.createIndex({key: value})`
