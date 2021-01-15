/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-console */
const faker = require('faker');
const Review = require('./reviews');
const db = require('./index.js');

const randNum = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// I need to add a product id line to the schema to identify which product the reviews are for!!!

const quantity = 3;
const reviews = [];

const seedReviews = () => {
  try {
    for (let r = 0; r < quantity; r += 1) {
      reviews.push(
        new Review({
          product_id: 0,
          product_name: 'Prego Ducati',
          username: faker.internet.userName(),
          title: faker.random.word(),
          review: faker.lorem.paragraph(),
          rating: 5,
          buy_again: faker.random.boolean(),
          would_recommend_to_friend: faker.random.boolean(),
          play_experience: 5,
          difficulty_level: 4,
          value_for_money_: randNum(5),
          helpful_count: randNum(90),
          unhelpful_count: randNum(90),
        }),
      );
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

seedReviews();

const insertSampleReviews = async function () {
  await Review.create(reviews)
    .then(console.log('database seeded'))
    .catch(console.log('error seeding database'));
};

insertSampleReviews();
