import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = (rating) => (
  <div className="reviewStar">
    {console.log(rating.rating)}
    <StarRatings
      rating={rating.rating}
      starRatedColor="yellow"
      name="rating"
    />
  </div>
);

export default Rating;
