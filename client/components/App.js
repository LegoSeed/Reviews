/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* cSpell: disable */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import { Container, Button, Accordion, Card } from 'react-bootstrap';
import Review from './reviewMod/review';
import ReviewForm from './reviewMod/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: null,
      submitted: null,
    };
    this.getData = this.getData.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  //  18.191.88.165
  getData() {
    axios.get('http://localhost:3000/reviews')
      .then((result) => this.setState({allReviews: result.data}))
      .catch((err) => console.log(err, 'error'));
  }

  submitReview(input) {

    axios.post('http://localhost:3000/review', { input })
      .then(() => {
        this.getData();
      })
      .then(() => this.setState({ submitted: true }))
      .catch((e) => {
        console.log(e, 'error calling submitReview');
      });
  }

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

  revealReviews() {
    return (
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Customer Reviews
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Review reviews={this.state.allReviews} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  render() {
    const { submitted } = this.state;
    return (
      <Container>
        <div style={{
          backgroundColor: '#F7F7F7',
        }}
        />
        {submitted
        ? '' : this.revealFormButton()}
        {this.state.allReviews && this.revealReviews()}
      </Container>
    );
  }
}

export default App;
