const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userMode');

// Create New User
exports.register = (req, res) => {
  const user = new User(req.body);
  user.hashPassword = bcrypt.hashSync(req.body.password, 10);
  user.save(err => {
    if (err) res.status(400).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'New User Created successfully' });
  });
};

// Login
exports.login = (req, res) => {
  const email = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    if (!user) res.status(401).json({ status: 'error', message: 'Authentication Failed No User Found' });
    if (user && !user.comparePassword(req.body.password, user.hashPassword)) {
      res.status(401).json({ status: 'error', message: 'Authentication Failed Wrong Password' });
    } else {
      jwt.sign(
        { email, username: user.username, _id: user.id },
        'luvusmsmsecretkey',
        { expiresIn: '30s' },
        (error, token) => {
          if (error) res.status(500).json({ status: 'error', message: error.message });
          res.status(200).json({ status: 'success', token });
        }
      );
    }
  });
};

// Login Required
exports.verifyToken = (req, res, next) => {
  return req.user ? next() : res.status(401).json({ status: 'error', message: 'Un authorized user ' });
};
