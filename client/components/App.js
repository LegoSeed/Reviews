/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import Review from './reviewMod/review';
import Overview from './overviewMod/overview';
import ReviewForm from './reviewMod/form';

const reviews = { data: [
  {
    _id: '6009d5a6509bc433d27db15c',
    product_id: 3,
    product_name: 'Prego Ducati',
    username: 'Mona_Osinski10',
    title: 'Global',
    review: 'Dolorum eum voluptatem perferendis laudantium ad est ea nobis dolorem. Iste temporibus accusantium sed ab ut. Praesentium nulla accusantium vero autem nostrum. Neque dolor facere atque et.',
    rating: 5,
    buy_again: true,
    would_recommend_to_friend: false,
    play_experience: 5,
    difficulty_level: 4,
    value_for_money_: 1,
    helpful_count: 62,
    unhelpful_count: 50,
    createdAt: '2021-01-21T19:27:34.044Z',
    updatedAt: '2021-01-21T19:27:34.044Z',
    __v: 0,
  }] };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // addReview: false,
      allReviews: reviews,
      overview: null,
      submitted: null,
    };
    this.getData = this.getData.bind(this);
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
      .then(() => {
        this.getData();
      })
      .then(() => this.setState({ submitted: true }))
      .catch((e) => {
        console.log(e, 'error calling submitReview');
      });
  }

  // make getData call get request for both reviews and overview.

  revealFormButton() {
    return (
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Write A Review?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ReviewForm fn={this.submitReview} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  render() {
    const { allReviews } = this.state;
    const { overview } = this.state;
    const { submitted } = this.state;
    return (
      <Container>
        <Row>
          { overview
            ? <Overview reviews={allReviews} /> : ''}
        </Row>
        {submitted
          ? '' : this.revealFormButton()}
        <Accordion defaultActiveKey="">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Customer Reviews
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Review reviews={allReviews} />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default App;
