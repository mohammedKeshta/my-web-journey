const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cors = require('cors');

const PORT = 8080;
const pets = require('./data/data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get('/pets', (req, res) => {
  res.status(200).send(pets);
});

app.get('/pets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let pet = (pets || []).filter(pet => pet.id === id);
  res.status(200).send(pet);
});

app.delete('/pets/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let pet = (pets || []).filter(pet => pet.id === id);
  res.status(200).send(pet);
});

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

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
