const mongoose = require('mongoose');

const placesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['coffee_shop', 'bookstore']
  }
}, { 
  timestamps: true
  }
);

const Place = mongoose.model('Place', placesSchema);

module.exports = Place;
