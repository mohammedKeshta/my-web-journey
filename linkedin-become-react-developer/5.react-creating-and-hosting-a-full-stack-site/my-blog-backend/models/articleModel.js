const mongoose = require('mongoose');

// Setup Schema
const articleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  upvote: Number,
  comments: [
    {
      username: String,
      text: String
    }
  ]
});

const Articles = (module.exports = mongoose.model('article', articleSchema));
module.exports.get = (callback, limit) => {
  Articles.find(callback).limit(limit);
};
