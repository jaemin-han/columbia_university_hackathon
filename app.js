const express = require('express');
const logger = require('morgan');
const path = require('path');
const mainRoute = require('./routes/main.js');
const mapRoute = require('./routes/map.js');
const locRoute = require('./routes/location.js')

const PORT = process.env.PORT || 3000
const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', mainRoute);
app.use('/maps', mapRoute);
app.use('/show/location', locRoute)

app.listen(PORT, () => console.log('Welcome to DTL2016 Hackathon on port:', PORT));
