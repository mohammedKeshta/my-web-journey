const express = require('express');

const router = express.Router();

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = ({ speakerService }) => {
  router.get('/', async (req, res, next) => {
    try {
      const promises = [];
      promises.push(speakerService.getListShort());
      promises.push(speakerService.getAllArtwork());
      const response = await Promise.all(promises);

      res.render('index', {
        title: 'Roux Meetups',
        page: 'Home',
        speakersList: response[0],
        artworks: response[1]
      });
    } catch (err) {
      return next(err);
    }
  });
  router.use('/speakers', speakersRoute(speakerService));
  router.use('/feedback', feedbackRoute(speakerService));

  return router;
};
