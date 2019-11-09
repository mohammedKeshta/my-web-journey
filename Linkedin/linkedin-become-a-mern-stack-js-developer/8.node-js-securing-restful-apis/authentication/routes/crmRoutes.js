const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');
const usersController = require('../controllers/usersController');

router
  .route('/contacts')
  .get(usersController.verifyToken, crmController.index)
  .post(usersController.verifyToken, crmController.new);

router
  .route('/contacts/:contactId')
  .get(usersController.verifyToken, crmController.exist)
  .put(usersController.verifyToken, crmController.update)
  .delete(usersController.verifyToken, crmController.delete);

module.exports = router;
