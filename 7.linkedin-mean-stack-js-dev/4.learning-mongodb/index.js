"use strict";

const MongoClient = require("mongodb").MongoClient;
const Hapi = require("@hapi/hapi");

const url = "mongodb://localhost:27017/learning_mongo";

const init = async tours => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  server.route([
    // Get tour list
    {
      method: "GET",
      path: "/api/tours",
      config: { json: { space: 2 } },
      handler: async (request, reply) => {
        return new Promise(resolve => {
          const findObject = {};
          for (let key in request.query) {
            findObject[key] = request.query[key];
          }
          tours.find(findObject).toArray((error, tours) => {
            resolve(tours);
          });
        });
      }
    },
    // Add new tour
    {
      method: "POST",
      path: "/api/tours",
      handler: (request, reply) => {}
    },
    // Get a single tour
    {
      method: "GET",
      path: "/api/tours/{name}",
      handler: (request, reply) => {
        return new Promise(resolve => {
          tours.findOne(
            { tourName: request.params.name },
            (mongoError, tours) => {
              resolve(tours);
            }
          );
        });
      }
    },
    // Update a single tour
    {
      method: "PUT",
      path: "/api/tours/{name}",
      handler: (request, reply) => {}
    },
    // Delete a single tour
    {
      method: "DELETE",
      path: "/api/tours/{name}",
      handler: (request, reply) => {}
    },
    // Home page
    {
      method: "GET",
      path: "/",
      handler: (request, reply) => {
        return "Hello world from Hapi/Mongo example.";
      }
    }
  ]);

  await server.start(err => {
    if (err) {
      throw err;
    }
    console.log("Server running on %s", server.info.uri);
    console.log(`Server Running at PORT ${server.info.port}`);
  });
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

MongoClient.connect(url, (err, db) => {
  console.log("connected correctly to server");
  let collection = db.collection("tours");
  init(collection);
});
