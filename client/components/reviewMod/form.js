/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  Container, Row, Col, Form, Button,
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
      value_for_money_: 5,
    };
    this.name = this.name.bind(this);
    this.title = this.title.bind(this);
    this.review = this.review.bind(this);
    this.rating = this.rating.bind(this);
    this.buy = this.buy.bind(this);
    this.recommend = this.recommend.bind(this);
    this.play = this.play.bind(this);
    this.difficulty = this.difficulty.bind(this);
    this.value = this.value.bind(this);
    this.submit = this.submit.bind(this);
  }

  name(e) {
    this.setState({ username: e.target.value });
  }

  title(e) {
    this.setState({ title: e.target.value });
  }

  review(e) {
    this.setState({ review: e.target.value });
  }

  rating(e) {
    this.setState({ rating: e.target.value });
  }

  buy(e) {
    if (e.target.value === 'Yes!') {
      this.setState({ buy_again: true });
    } else {
      this.setState({ buy_again: false });
    }
  }

  recommend(e) {
    if (e === 'Yes!') {
      this.setState({ would_recommend_to_friend: true });
    }else {
      this.setState({ would_recommend_to_friend: false });
    }
  }

  play(e) {
    this.setState({ play_experience: e.target.value });
  }

  difficulty(e) {
    this.setState({ difficulty_level: e.target.value });
  }

  value(e) {
    this.setState({ value_for_money_: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const record = {
      username: this.state.username,
      title: this.state.title,
      review: this.state.review,
      rating: this.state.rating,
      buy_again: this.state.buy_again,
      would_recommend_to_friend: this.state.would_recommend_to_friend,
      play_experience: this.state.play_experience,
      difficulty_level: this.state.difficulty_level,
      value_for_money_: this.state.value_for_money_,
    };
    this.props.fn(record);
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange={this.name} />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Review Title</Form.Label>
            <Form.Control type="text" placeholder="Review Title" onChange={this.title} />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>1 -5, how did we do?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.rating}
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>What did you think of your product!</Form.Label>
            <Form.Control type="text" placeholder="Write your review here" onChange={this.review} />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Would you buy this item again?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.buy}
            >
              <option></option>
              <option>Yes!</option>
              <option>Probably not</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Would you recommend this item to a friend?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.recommend}
            >
              <option></option>
              <option>Yes!</option>
              <option>Probably not</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate your play experience!</Form.Label>
            <Form.Control
              as="select"
              onChange={this.play}
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How hard was this build?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.difficulty}
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Was this product worth the money?</Form.Label>
            <Form.Control
              as="select"
              onChange={this.value}
            >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Button onClick={this.submit}>Submit!</Button>
        </Form>
      </Container>
    );
  }
}

export default ReviewForm;
