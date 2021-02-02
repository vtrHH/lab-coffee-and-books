'use strict';

const { Router } = require('express');
const Place = require('../models/place');
const router = new Router();

router.get('/', (req, res, next) => {
  Place.find()
  .then(places => {
    console.log(places);
    res.render('index', { places });
  })
  .catch(error => {
    next(error);
  });
});

module.exports = router;
