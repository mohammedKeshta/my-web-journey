const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');
router
  .route('/contacts')
  .get(crmController.index)
  .post(crmController.new);

router
  .route('/contacts/:contactId')
  .get(crmController.exist)
  .put(crmController.update)
  .delete(crmController.delete);

module.exports = router;
