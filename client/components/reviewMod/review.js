/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import moment from 'moment';
import {
  Container, Card, Row, Col,
} from 'react-bootstrap';
import Rating from './star_rating';
import Helpful from './helpful';
import Experience from './experience';
import Recommend from './recommend';

const Review = (allReviews) => (
  <div>
    {allReviews.reviews.data.map((review) => (
      <Card className="reviewBlock" key={review._id}>
        <Container
          style={{
            fontSize: '16px',
            margin: '20px',
          }}
        >

          <Row>
            { moment(review.createdAt).startOf('minute').fromNow() }
          </Row>

          <Row>
            <Rating rating={review.rating} />
          </Row>

          <Row sm={8}>
            { review.username }
          </Row>

          <Row>
            <Recommend review={review} />
          </Row>

          <Row>
            <Col sm={8}>{ review.review }</Col>
            <Col sm={4}>
              <Experience review={review} />
            </Col>
          </Row>

          <Row>
            <Helpful review={review} />
          </Row>
        </Container>
      </Card>
    ))}
  </div>
);

export default Review;
