/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Review from './reviewMod/reviews';
import Overview from './overviewMod/overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: '',
    };
    this.getData = this.getData.bind(this);
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

  render() {
    const { allReviews } = this.state;
    return (
      <div>
        <div>
          <Overview reviews={allReviews} />
        </div>
        <div>
          <Review reviews={allReviews} />
        </div>
        <div> Filter Module </div>
        <div>Reviews Module</div>
      </div>
    );
  }
}

export default App;
