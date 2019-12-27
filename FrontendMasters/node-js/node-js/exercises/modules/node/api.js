const { users, posts } = require('./data');
const api = {};

api.getUserById = (id, cb) => {
  // simulate API call
  const user = users.find(user => user.id === id);
  cb(user);
};

api.getPostsForUser = (userId, cb) => {
  // simulate API call
  const _posts = posts.filter(post => post.createdBy === userId);
  cb(_posts);
};

module.exports = api;
