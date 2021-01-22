import React from 'react';

const Helpful = (review) => (
  <div>
    <div>
      {' '}
      Was this review helpful?
      YES! {review.review.helpful_count}
      , No {review.review.unhelpful_count}
    </div>
  </div>
);

export default Helpful;
