'use strict';

const { Router } = require('express');
const Place = require('../models/place');
const router = new Router();

router.get('/create', (req, res, next) => {
  res.render('place/create');
});

router.post('/create', (req, res, next) => {
  const data = req.body;
  Place.create({
    name: data.name,
    type: data.type
  })
    .then(place => {
      res.redirect(`${place._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
  .then(place => {
    res.render('place/single', { place: place } );
  })
  .catch((error) => {
    next(error);
  });
});

router.get('/update', (req, res, next) => {
    const id = req.params.id;
    Place.findById(id)
      .then(place => {
          res.render('place/single', { place });
        })
      .catch(error => {
        next(error);
      });
    });

  router.post('/:id/update', (req, res, next) => {
    /// stopped here
  })



module.exports = router;
