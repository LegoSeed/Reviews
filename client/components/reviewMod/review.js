/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import Rating from './star_rating';
import Helpful from './helpful';
import Experience from './experience';

const Review = (allReviews) => (
  <div>
    {allReviews.reviews.data.map((review) => (
      <div className="reviewBlock" key={review._id}>

        <div>
          {moment(review.createdAt).startOf('hour').fromNow()}
        </div>

        <div>
          <Rating rating={review.rating} />
        </div>

        <div className="username">
          { review.username }
        </div>

        <div>Would/would not recommend</div>

        <div>
          <span className="reviewText">{ review.review }</span>
          <span className="reviewExperience">
            <Experience review={review} />
          </span>
        </div>

        <div>
          <Helpful />
        </div>
      </div>
    ))}
  </div>
);

export default Review;
