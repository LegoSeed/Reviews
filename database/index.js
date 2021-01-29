const mongoose = require('mongoose');

mongoose.connect('mongodb://database/FECReviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;

// :279017
