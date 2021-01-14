
// const db  = require('./index.js');
// const Blog = require('./Blog.js');


// const samplePosts = [
// //data here
// ];


// const insertSampleBlogs = function() {
//   Blog.create(samplePosts)
//     .then(() => db.disconnect());
// };

// insertSampleBlogs();

// Building database with faker.

import faker from 'faker';
import Review from './reviews';

const seedReviews = async () => {
  try {
    const quantity = 3;
    const reviews = [];

    for (let r = 0; r < quantity; r += 1) {
      user.push(
        new Review({
          username: faker.internet.userName,
          date: faker.date.past,
          title: String,
          review: faker.lorem.paragraph,
          rating: 5,
          buy_again: faker.random.boolean,
          would_recommend_to_friend: faker.random.boolean,
          play_experience: 5,
          difficulty_level: 4,
          value_for_money_: Number,
          average_rating: Number,
          helpful_count: Number,
          unhelpful_count: Number,
        }),
      );
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default seedReviews;