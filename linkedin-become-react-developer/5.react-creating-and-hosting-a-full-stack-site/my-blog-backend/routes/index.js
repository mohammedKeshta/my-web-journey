const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articlesController');

router.get('/', function(req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!'
  });
});

// Article Route
router
  .route('/api/articles')
  .get(articleController.index)
  .post(articleController.new);

router
  .route('/api/articles/:name')
  .get(articleController.view)
  .put(articleController.update)
  .delete(articleController.delete);

router.route('/api/articles/:name/upvote').put(articleController.upvote);

router.route('/api/articles/:name/downvote').put(articleController.downvote);

module.exports = router;
