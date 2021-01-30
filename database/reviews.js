/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  username: String,
  title: String,
  review: String,
  rating: Number,
  buy_again: Boolean,
  would_recommend_to_friend: Boolean,
  play_experience: Number,
  difficulty_level: Number,
  value_for_money: Number,
  average_rating: Number,
  helpful_count: Number,
  unhelpful_count: Number,
},
{
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// config.yml for circle CI
// orb for node, orb for slack
// job is like a function, jobs have steps
