const express = require('express');

const router = express.Router();

module.exports = speakerService => {
  /* GET home Speakers Page. */
  router.get('/', async (req, res, next) => {
    try {
      const promises = [];
      promises.push(speakerService.getList());
      promises.push(speakerService.getAllArtwork());
      const response = await Promise.all(promises);

      res.render('speakers', {
        title: 'Roux Meetups',
        page: 'Speakers',
        speakersList: response[0],
        artworks: response[1]
      });
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const promises = [];
      promises.push(speakerService.getSpeaker(name));
      promises.push(speakerService.getArtworkForSpeaker(name));
      const response = await Promise.all(promises);

      res.render('speakers/details', {
        title: 'Roux Meetups',
        page: name,
        speaker: response[0],
        artworks: response[1]
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
