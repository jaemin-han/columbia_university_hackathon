const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);

module.exports = {

  getAllLocations(req, res, next) {
    db.any('SELECT * FROM location')
        .then((data) => {
        res.rows = data;
        next();
      })
      .catch(error => next(error));
  },

  getFiltered(req, res, next) {
    db.any('SELECT * FROM location WHERE appName=$1, host=$2', [req.body.appName, req.body.host])
        .then((data) => {
        res.rows = data;
        next();
      })
      .catch(error => next(error));
  },

    getFilteredDecs(req, res, next) {
    db.any('SELECT * FROM location WHERE appName=$1, host=$2 ORDER BY locTime DECS', [req.body.appName, req.body.host])
        .then((data) => {
        res.rows = data;
        next();
      })
      .catch(error => next(error));
  },



}
