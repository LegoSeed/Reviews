const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const overviewSchema = new mongoose.Schema({
  overall_average: Number,
  star1: Number,
  star2: Number,
  star3: Number,
  star4: Number,
  star5: Number,
});

mongoose.model.Overview = Overview;

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;