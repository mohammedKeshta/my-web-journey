import path from 'path';
import express, { Router } from 'express';
import data from './data/db';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// Method to use json
app.use(express.json());

app.get('/', (req, res) => {
  // get data first
  res.json(data);
});

// JSON data   =>   {"name": "mohammed"}
// URL-ENCODED =>   name=mohammed
app.post('/newItem', (req, res) => {
  res.send(req.body);
});

app.get(
  '/item/:id',
  (req, res, next) => {
    // this is the middleware that pull the data
    if (req.params && req.params.id) {
      let id = parseInt(req.params.id);
      let item = (data || []).filter(item => item.id === id);
      // middleware tha uses the req Object
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      // everything above is a middleware
      res.send(item);
    }
    next();
  },
  (req, res) => {
    console.log('Did you get the rights data');
  }
);

// Common Method
app.get('/responseMethod', (res, req) => {
  req.download('public/images/rocket.jpg');
  // req.redirect('https://google.com');
  // req.end(); /* end the response process*/
});

app
  .route('/item')
  .get((req, res) => {
    res.send(`<h1>A GET request with / route on port ${PORT}</h1>`);
  })
  .post((req, res) => {
    res.send(`<h1>A POST request with / route on port ${PORT}</h1>`);
  })
  .put((req, res) => {
    res.send(`<h1>A PUT request with / route on port ${PORT}</h1>`);
  })
  .delete((req, res) => {
    res.send(`<h1>A DELETE request with / route on port ${PORT}</h1>`);
  });

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
