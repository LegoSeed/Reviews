/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-console */
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');

const writeReviews = fs.createWriteStream('./database/reviews.csv');
writeReviews.write('product_id, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count\n');

function writeTenMillionReviews(writer, callback) {
  let max = 75000000;
  let count = 0;
  function write() {
    let ok = true;
    do {
      max -= 1;
      count += 1;
      const ranProdId = () => Math.floor(Math.random() * Math.floor(10000000) + 1);
      const ranUserName = () => faker.internet.userName();
      const ranTitle = () => faker.lorem.word();
      const ranReview = () => faker.lorem.paragraph();
      const ranRating = () => Math.floor(Math.random() * 5) + 1;
      const ranTrueFalse = () => ((Math.floor(Math.random() * Math.floor(2))) === 1) ? 1 : 0;
      const ranHelpUnHelp = () => Math.floor(Math.random() * 90);
      const data = `${ranProdId()},${ranUserName()},${ranTitle()},${ranReview()},${ranRating()},${ranTrueFalse()},${ranTrueFalse()},${ranRating()},${ranRating()},${ranRating()},${ranHelpUnHelp()},${ranHelpUnHelp()}\n`;

      if (max === 0) {
        writer.write(data, callback);
      } else {
        ok = writer.write(data);
      }
    } while (max > 0 && ok);

    if (max > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

console.time('start');
writeTenMillionReviews(writeReviews, () => {
  writeReviews.end();
  console.timeEnd('start');
});

// COPY reviews(product_id, username, title, review, rating, buy_again, would_recommend_to_friend,play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count)
// FROM '/home/randal/hackreactorcourse/SDCLego/Reviews/database/reviews.csv'
// DELIMITER ','
// CSV HEADER;

// const query = `INSERT INTO reviews (product_id, product_name, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count)
//  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
