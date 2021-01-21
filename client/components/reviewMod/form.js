import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      review: '',
      rating: 1,
      buy_again: true,
      would_recommend_to_friend: true,
      play_experience: 1,
      difficulty_level: 1,
      value_for_money_: 1,
    };
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Review Title</Form.Label>
            <Form.Control type="text" placeholder="Review Title" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>What did you think of your product!</Form.Label>
            <Form.Control type="text" placeholder="Write your review here" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Would you buy again?" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Would you recommend this product to a friend" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate your play experience!</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How hard was this build?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Was this product worth the money?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default ReviewForm;

// <Form.Group controlId="formBasicPassword">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// <Form.Group controlId="formBasicCheckbox">
// <Form.Check type="checkbox" label="Check me out" />
// </Form.Group>
// <Button variant="primary" type="submit">
// Submit
// </Button>
