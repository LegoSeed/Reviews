import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = (rating) => (
  <div className="reviewStar">
    {/* {console.log(rating.rating)} */}
    <StarRatings
      rating={rating.rating}
      starRatedColor="yellow"
      name="rating"
      starDimension="15px"
      starSpacing="5px"
    />
  </div>
);

export default Rating;
