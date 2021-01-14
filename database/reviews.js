const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema ({
  username: String,
  date: Number,
  title: String,
  review: String,
  rating: Number,
  images: String,
  buy_again: Boolean,
  would_you_recommend_to_friend: Boolean,
  play_experience: Number,
  difficulty_level: Number,
  value_for_money_: Number,
  average_rating: Number,
  helpful_count: Number,
  unhelpful_count: Number
},
{
  timestamps: true
}
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;