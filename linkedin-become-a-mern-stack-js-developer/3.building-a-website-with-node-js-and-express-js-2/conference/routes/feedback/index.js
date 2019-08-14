const express = require('express');

const router = express.Router();

module.exports = feedBackService => {
  /* GET home feedback Page. */
  router.get('/', async (req, res, next) => {
    try {
      const feedbackList = await feedBackService.getList();
      res.render('feedback', {
        title: 'Roux Meetups',
        page: 'Feedbacks',
        feedbackList,
        sucess: req.query.sucess
      });
    } catch (err) {
      return next(err);
    }
  });
  router.post('/', async (req, res, next) => {
    const { fbName, fbTitle, fbMessage } = req.body;
    const name = fbName.trim();
    const title = fbTitle.trim();
    const message = fbMessage.trim();
    const feedbackList = await feedBackService.getList();
    if (!name || !title || !message) {
      res.render('feedback', {
        title: 'Roux Meetups',
        page: 'Feedbacks',
        feedbackList,
        error: true
      });
    }
    await feedBackService.addEntry(name, title, message);
    return res.redirect('/feedback?success=true');
  });
  return router;
};
