const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./controllers/index'));
app.use('/users', require('./controllers/users'));
app.use('/genres', require('./controllers/users'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
