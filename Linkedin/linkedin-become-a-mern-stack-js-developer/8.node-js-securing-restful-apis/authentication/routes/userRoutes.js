const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.route('/login').get(userController.login);
router.route('/register').post(userController.register);

module.exports = router;
