/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Review from './reviewMod/review';
import Overview from './overviewMod/overview';
import ReviewForm from './reviewMod/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReview: false,
      allReviews: '',
      overview: null,
    };
    this.getData = this.getData.bind(this);
    this.addReview = this.addReview.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  //  resets all reviews in state
  getData() {
    axios.get('http://localhost:3000/reviews')
      .then((result) => this.setState({ allReviews: result }))
      .catch((err) => console.log(err, 'error'));
  }

  submitReview(input) {
    console.log(input, 'input from form');
    // WILL NEED TO ADD CURRENT PRODUCT ID NUMBER TO REQUEST!!
    // CURRENTLY HARDCODED INTO FORM.JS

    axios.post('http://localhost:3000/review', { input })
      .then((response) => {
        this.getData();
      })
      .then(() => this.setState({ addReview: false }))
      .catch((e) => {
        console.log(e, 'error calling submitReview');
      });
  }

  addReview() {
    console.log('clicked!');
    this.setState({ addReview: true });
  }

  // make getData call get request for both reviews and overview.

  render() {
    const { allReviews } = this.state;
    const { overview } = this.state;
    const { addReview } = this.state;
    return (
      <Container>
        <Row>
          { overview ? <Overview reviews={allReviews} /> : ''}
        </Row>
        <Button
          onClick={() => this.addReview()}
        >
          {' '}
          Submit A Review
        </Button>
        { addReview ? <ReviewForm fn={this.submitReview} /> : ''}
        <Row>
          { allReviews === '' ? '' : <Review reviews={allReviews} /> }
        </Row>
      </Container>
    );
  }
}

export default App;
