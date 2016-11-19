const router = require('express').Router();

router.get('/', (req, res) => {
  // console.log('index page router works');
  res.render('index', {
    lat: 40.7410605,
    lng: -73.9896986
  });
});

module.exports = router;
