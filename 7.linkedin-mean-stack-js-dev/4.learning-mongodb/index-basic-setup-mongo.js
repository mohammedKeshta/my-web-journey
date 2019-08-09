const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/learning_mongo";

const findDocuments = (db, callback) => {
  const tours = db.collection("tours");
  tours
    .find({ tourName: "Monterey to Santa Barbara Tour" })
    .toArray((err, docs) => {
      console.log(docs);
      callback;
    });
};
MongoClient.connect(url, (err, db) => {
  console.log("Server Connected Successfully");
  findDocuments(db, () => {
    db.close();
  });
});
