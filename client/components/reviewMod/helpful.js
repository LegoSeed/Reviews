import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Helpful = (review) => (
  <Container>
    <Row>
      {' '}
      Was this review helpful?
      YES! {review.review.helpful_count}
      , No {review.review.unhelpful_count}
    </Row>
  </Container>
);

export default Helpful;
