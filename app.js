const express = require('express');
const logger = require('morgan');
const path = require('path');
const mainRoute = require('./routes/main.js')

const PORT = process.env.PORT || 3000
const app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoute);

app.listen(PORT, () => console.log('Welcome to DTL2016 Hackathon on port:', PORT));
