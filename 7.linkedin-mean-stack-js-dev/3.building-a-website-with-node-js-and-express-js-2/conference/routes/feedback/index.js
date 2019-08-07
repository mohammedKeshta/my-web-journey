const express = require('express');

const router = express.Router();

module.exports = speakerService => {
  /* GET home feedback Page. */
  router.get('/', function(req, res) {
    res.send('Hello Home feedback');
  });
  router.post('/', function(req, res) {
    res.send(`Data Sent`);
  });
  return router;
};
