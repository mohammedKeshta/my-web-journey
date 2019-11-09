Article = require('../models/articleModel');

// Handle Index Actions
exports.index = (req, res) => {
  Article.get((err, articles) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'Articles retrieved successfully', data: articles });
  }, 50);
};

// Handle create Article actions
exports.new = (req, res) => {
  const article = new Article();
  article.name = req.body.name ? req.body.name : article.name;
  article.title = req.body.title;
  article.content = req.body.content;
  article.upvote = req.body.upvote;
  article.comments = req.body.comments;
  // Save Article and Check for errors
  article.save(err => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'New Article Created successfully' });
  });
};

// Handle View Article Info
exports.view = (req, res) => {
  Article.find({ name: req.params.name }, (err, article) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'Article details loading..', data: article });
  });
};

// Handle update Article info
exports.update = (req, res) => {
  Article.findOne({ name: req.params.name }, (err, article) => {
    article.name = req.body.name ? req.body.name : article.name;
    article.title = req.body.title;
    article.content = req.body.content;
    article.upvote = req.body.upvote;
    article.comments = req.body.comments;

    // save the ِ article and check for errors
    article.save(err => {
      if (err) res.status(500).json({ status: 'error', message: err });
      res.status(200).json({ status: 'success', message: 'Article Info updated' });
    });
  });
};

// Handle delete article
exports.delete = (req, res) => {
  Article.remove(
    {
      name: req.params.name
    },
    err => {
      if (err) res.status(500).json({ status: 'error', message: err });
      res.status(200).json({ status: 'success', message: 'Article Deleted' });
    }
  );
};

// Handle Up Vote Article
exports.upvote = (req, res) => {
  Article.findOne({ name: req.params.name }, (err, article) => {
    article.upvote++;
    article.save((err, article) => {
      if (err) res.status(500).json({ status: 'error', message: err });
      res.status(200).send({ status: 'success', message: 'Article Up Voted Successfully' });
    });
  });
};

// Handle Down Vote Article
exports.downvote = (req, res) => {
  Article.findOne({ name: req.params.name }, (err, article) => {
    article.upvote--;
    article.save((err, article) => {
      if (err) res.status(500).json({ status: 'error', message: err });
      res.status(200).send({ status: 'success', message: 'Article Down Voted Successfully' });
    });
  });
};
