const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  hashPassword: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

const User = (module.exports = mongoose.model('users', UserSchema));
