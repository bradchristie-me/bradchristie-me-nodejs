'use strict';

const env     = process.env.NODE_ENV || 'development';
const express = require('express');

const app = module.exports = express();

app.use('/', (req, res) => {
  res.send('Hello, world!');
});