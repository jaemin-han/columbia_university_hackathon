const location = require('express').Router();
const { getAllLocations } = require('../model/location');

location.get('/', getAllLocations, (req, res) => {
  console.log('This worked');
});

module.exports = location;
