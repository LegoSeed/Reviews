/* eslint-disable no-underscore-dangle */
import React from 'react';
import StarRating from './star_rating';

const Review = (allReviews) => (
  <div>
    {allReviews.reviews.data.map((review) => (
      <div>
        <div key={review._id}>
          { review.username }
        </div>
        <div>
          <StarRating rating={review.rating} />
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
