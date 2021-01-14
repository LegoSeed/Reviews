const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/FECReviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
