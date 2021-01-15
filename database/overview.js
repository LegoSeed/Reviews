/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
let db = require('./index.js');

mongoose.Promise = global.Promise;

const overviewSchema = new mongoose.Schema({
  overall_average: Number,
  star1: Number,
  star2: Number,
  star3: Number,
  star4: Number,
  star5: Number,
});

const Overview = mongoose.model('Overview', overviewSchema);

module.exports = Overview;
