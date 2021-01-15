/* eslint-disable class-methods-use-this */
import React from 'react';

const Review = (allReviews) => (
  <div>
    {console.log(allReviews.reviews.data, 'reviews from Review')}
    REVIEWS MODULE
    <div> allReviews.reviews.data </div>
    <div>Star Rating</div>
    <div>author</div>
    <div>Would/would not recommend</div>
    <div>
      <span>reviews</span>
      <span>experience, difficulty, value for money</span>
    </div>
    <div>helpful?</div>
  </div>
);

export default Review;
