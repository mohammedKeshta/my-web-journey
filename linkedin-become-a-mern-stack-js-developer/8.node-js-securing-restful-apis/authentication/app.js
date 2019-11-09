const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const CONFIG = require('./config');

const jwt = require('jsonwebtoken');
const User = require('./models/userMode');

const indexRouter = require('./routes/indexRoutes');
const userRouter = require('./routes/userRoutes');
const crmRouter = require('./routes/crmRoutes');

const PORT = 5000;
const app = express();

const client = mongoose.connect(CONFIG.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = client.connection;
// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

// serving static files
app.use(express.static('public'));

// JWT setup
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'luvusmsmsecretkey', (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/crm', crmRouter);

app.listen(PORT, () => {
  console.log(`Server start @ ${PORT}`);
});
