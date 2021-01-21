import React from 'react';

const Recommend = (review) => (
  <div>
    {review.review.would_recommend_to_friend === true
      ? <p>I would recommend this to a friend!</p>
      : <p>I would not recommend this to a friend!</p> }
  </div>
);

export default Recommend;
