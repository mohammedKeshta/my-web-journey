db.movieDetails.updateOne(
  { title: 'The Martian' },
  {
    $set: {
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg'
    },
    $push: { reviewers: { $each: ['mohammed', 'Elzanaty'] } }
  }
);

db.movieDetails.updateMany(
  { rated: null },
  {
    $unset: {
      rated: ""
    }
  }
);
