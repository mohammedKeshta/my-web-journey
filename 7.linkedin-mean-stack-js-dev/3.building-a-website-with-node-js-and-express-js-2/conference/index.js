const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const SpeakerService = require('./services/SpeakerService');
const configs = require('./config');
const routes = require('./routes');

const config = configs[app.get('env')];
const speakerService = new SpeakerService(config.data.speakers);

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

if (app.get('env') === 'development') app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use(async (req, res, next) => {
  try {
    app.locals.speakersNames = await speakerService.getNames();
    next();
  } catch (e) {
    return next(e);
  }
});

app.use('/', routes({ speakerService }));

// Catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));
// Error Handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const status = err.status || 500;
  res.locals.status = status;
  // render the error page
  res.status(status);
  res.render('error');
});

app.listen(app.get('port'));
module.exports = app;
