require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes');
const { clientError, serverError } = require('./controller/error');


const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);
app.use(clientError);
app.use(serverError);

module.exports = app;
