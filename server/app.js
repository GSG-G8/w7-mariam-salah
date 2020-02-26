require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);
app.use(express.json());

module.exports = app;
