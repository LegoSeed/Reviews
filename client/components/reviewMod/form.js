/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  Container, Form, Button, Col,
} from 'react-bootstrap';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      product_id: '',
      title: '',
      review: '',
      rating: 5,
      buy_again: true,
      would_recommend_to_friend: true,
      play_experience: 5,
      difficulty_level: 5,
      value_for_money: 5,
    };

    this.handleChange = this.handleChange.bind(this);
    this.buy = this.buy.bind(this);
    this.recommend = this.recommend.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  buy(e) {
    if (e.target.value === 'Yes!') {
      this.setState({ buy_again: true });
    } else {
      this.setState({ buy_again: false });
    }
  }

  recommend(e) {
    if (e.target.value === 'Yes!') {
      this.setState({ would_recommend_to_friend: true });
    } else {
      this.setState({ would_recommend_to_friend: false });
    }
  }

  submit(e) {
    e.preventDefault();
    const record = {
      product_id: 3,
      product_name: 'Prego Ducati',
      username: this.state.username,
      title: this.state.title,
      review: this.state.review,
      rating: this.state.rating,
      buy_again: this.state.buy_again,
      would_recommend_to_friend: this.state.would_recommend_to_friend,
      play_experience: this.state.play_experience,
      difficulty_level: this.state.difficulty_level,
      value_for_money: this.state.value_for_money,
      helpful_count: 0,
      unhelpful_count: 0,
    };
    this.props.fn(record);
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Row>

            <Form.Group as={Col} controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={this.handleChange}
                name="username"
              />
              <Form.Text className="text-muted" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Review Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Review Title"
                onChange={this.handleChange}
                name="title"
              />
              <Form.Text className="text-muted" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>1 -5, how did we do?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.handleChange}
              name="rating"
            >
              <option />
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicReview">
            <Form.Label>What did you think of your product!</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write your review here"
              onChange={this.handleChange}
              name="review"
            />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicCheckbox">
              <Form.Label>Would you buy this item again?</Form.Label>
              <Form.Control
                as="select"
                onChange={this.buy}
                name="buy_again"
              >
                <option />
                <option>Yes!</option>
                <option>Probably not</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicCheckbox">
              <Form.Label>Would you recommend this item to a friend?</Form.Label>
              <Form.Control
                as="select"
                onChange={this.recommend}
                name="would_recommend_to_friend"
              >
                <option />
                <option>Yes!</option>
                <option>Probably not</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate your play experience!</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="play_experience"
              >
                <option />
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>How hard was this build?</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="difficulty_level"
              >
                <option />
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Was this product worth the money?</Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                name="value_for_money"
              >
                <option />
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button onClick={this.submit}>Submit!</Button>

        </Form>
      </Container>
    );
  }
}

export default ReviewForm;
