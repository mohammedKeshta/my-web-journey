# [MongoDB for Developers Learning Path](https://university.mongodb.com/dashboard)

## LINKS

- ping cluster0-shard-00-00-jxeqq.mongodb.net
- connection to Atlas Cluster
  - mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
  - mongo "mongodb+srv://zanaty-m001-8fc5f.mongodb.net/test" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
- [Creating an Atlas Sandbox Cluster](https://cloud.mongodb.com/user#/atlas/register/accountProfile)
- [Labs](https://krishnakrishh04.blogspot.com/2019/10/m001-mongodb-basics-q-quiz-labs-final.html)
- MongoDB Commands
  - `show dbs` to show all names-spaces/dbs
  - `use db_name` to use specific names-spaces/dbs
  - `show collections` to show all connection related to specific db
  - load Data to Cluster
    - `load("nameOfFile")`
  - `db.collection_name.find().pretty()` to show all document @ specific collection
  - `db.collection_name.find({key: "value"}).count()` get Count
  - Insert Document to DB `db.collection_name.insertOne({title: "Star Trek II: The Wrath of Khan", year: 1982, imdb: "tt0084726"})`
  - The Find Method Return A `Cursor` that is essentially a pointer in a current location in a result set
  - To Make a projection and get only one field at mongo `db.collection_name.find({key: "value"}, {field_name: 1})`
  -
- MongoDB Comparison Operators
  - `$eq` – Equal To
  - `$ne` – Not Equal To (!=)
  - `$gt` – Greater Than (>)
  - `$gte` – Greater Than Equal To (>=)
  - `$lt` – Less Than (<)
  - `$lte` – Less Than Equal To (<=)
  - `$in` – In (Available in)
  - `$nin` – Not In (Not available in)
- MongoDB Logical Operators
  - `$and` – AND operator
  - `$or` – OR operator
  - `$nor` – NOR operator
  - `$not` – NOT operator
