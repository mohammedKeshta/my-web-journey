const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contestSchema = new Schema({
  id: {
    type: Number
  },
  categoryName: {
    type: String
  },
  contestName: {
    type: String
  },
  categoryImage: {
    type: String
  },
  contestDescription: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  }
});

const Contest = (module.exports = mongoose.model('contest', contestSchema));

module.exports.get = (callback, limit) => {
  Contest.find(callback).limit(limit);
};
