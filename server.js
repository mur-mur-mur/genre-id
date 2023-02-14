/* eslint-disable */
const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

const app = express();

app.get('/', (req, res) => {
  res.send('Express Here!')
});

app.listen(PORT, () => {
  console.info(`🔭🔭🔭🔭🔭Server started on ${API_URL}:${PORT}🔭🔭🔭🔭🔭`);
});