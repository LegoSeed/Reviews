import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadySelected: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (

      <Container>
        <Row> Was this review helpful?</Row>
        <Row>
          {' '}
          <a> YES! { this.props.review.helpful_count } </a>
          <a>,  No { this.props.review.unhelpful_count } </a>
        </Row>
      </Container>
    );
  }
}

// import React, { useState } from 'react';

// const Helpful = () => {
//   const []
// }

export default Helpful;
