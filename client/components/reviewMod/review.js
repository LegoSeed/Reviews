/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Rating from './star_rating';

const Review = (allReviews) => (
  <div>
    {allReviews.reviews.data.map((review) => (
      <div key={review._id}>
        <div>
          { review.username }
        </div>
        <div>
          <Rating rating={review.rating} />
        </div>
      </div>
    ))}
    {/* {console.log(allReviews.reviews.data[0], 'reviews from Review')} */}
    REVIEWS MODULE
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
