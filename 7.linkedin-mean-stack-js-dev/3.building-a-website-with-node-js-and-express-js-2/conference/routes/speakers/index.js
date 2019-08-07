const express = require('express');

const router = express.Router();

/* GET home Speakers Page. */
router.get('/', function(req, res) {
  res.render('speakers');
});

router.get('/:name', function(req, res) {
  res.render('speakers/details', { page: req.params.name });
});

module.exports = router;
