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
    - Matches values that are **equal** to a specified value.
  - `$ne` – Not Equal To (!=)
    - Matches all values that are **not equal** to a specified value.
  - `$gt` – Greater Than (>)
    - Matches values that are **greater than** a specified value.
  - `$gte` – Greater Than Equal To (>=)
    - Matches values that are **greater than or equal** to a specified value.
  - `$lt` – Less Than (<)
    - Matches values that are **less than** a specified value.
  - `$lte` – Less Than Equal To (<=)
    - Matches values that are **less than or equal** to a specified value.
  - `$in` – In (Available in)
    - Matches any of the values specified in an array.
  - `$nin` – Not In (Not available in)
    - Matches **none** of the values specified in an array.
  - `$ne` – Not In (Not available in)
    - Matches all values that are not equal to a specified value.
  - **EXAMPLES**

    - `db.collection_name.find({"runtime": {$gte: 90, $lt: 120}, "tomato.meter": {$gt: 95}, "rated": {$nin: ['PG'], $ne:"NOT RATED"}}, {title: 1, runtime: 1,rated:1, _id: 0})`

- MongoDB Element Operators

  - `$exists` – Matches documents that have the specified field.
  - `$type` – Selects documents if a field is of the specified type.
  - **EXAMPLES**

    - `db.collection_name.find({ atmosphericPressureChange: {$exists: false, $type: "int"}})`

- MongoDB Logical Operators

  - `$and` – Joins query clauses with a logical AND **returns all documents that match the conditions of both clauses**.
  - `$or` – Joins query clauses with a logical OR **returns all documents that match the conditions of either clause**.
  - `$nor` – Joins query clauses with a logical NOR **returns all documents that fail to match both clauses**.
  - `$not` – Inverts the effect of a query expression and **returns documents that do not match the query expression**.
  - **EXAMPLES**

    - `db.collection_name.find({$or: [{"field_1": {$gt: 95}}, {"field_1": {$gt:88 }}]})`
    - `db.collection_name.find({$and: [{"field_1": {$gt: 95}}, {"field_1": {$gt:88 }}]})`

- MongoDB Array Operators

  - `$all` – Matches arrays that contain all elements specified in the query.
  - `$elemMatch` – Selects documents if element in the array field matches all the specified \$elemMatch conditions.
  - `$size` – Selects documents if the array field is a specified size.
  - **EXAMPLES**

    - `db.collection_name.find({"field_name": {$all: ["element_01", "element_02", "element_03"]}})`
    - `db.collection_name.find({"field_name": {$size: 1}})`

- MongoDB Evaluation Operators

  - `$regex` – Selects documents where values match a specified regular expression.
  - `$text` – Performs text search.
