/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-console */
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');

const writeProductIds = fs.createWriteStream('./database/productIds.csv');
writeProductIds.write('product_name\n');

const legos = ['Colosseum', 'NES', 'Wooden Minifigure', 'Harley-Davidson', 'Demon Bull King', 'Fire Command Unit', "Monkie Kid's Cloud Jet", 'Stormtrooper', 'Hogwarts Castle', '1989 Batmobile', 'Dinosaur Fossils', 'AT-AT', 'Milennium Falcon', 'Demon Bull King', 'Iron Bull Tank', 'X-1 Ninja Charger', 'Boulder Blaster', 'Overlord Dragon', 'Elsa and the Nokk', ' MF Set', 'Monkey King', 'Unicorn', 'Indominus Rex'];

function writeTenMillionProductIds(writer, callback) {
  let max = 1000000;
  let count = 0;
  function write() {
    let ok = true;
    do {
      max -= 1;
      count += 1;
      const ranProdName = () => legos[Math.floor(Math.random() * legos.length)];
      const data = `${ranProdName()}\n`;

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
writeTenMillionProductIds(writeProductIds, () => {
  writeProductIds.end();
  console.timeEnd('start');
});

// COPY products(product_name)
// FROM '/home/randal/hackreactorcourse/SDCLego/Reviews/database/productIds.csv'
// DELIMITER ','
// CSV HEADER;

// console.time('start');

// while (count < max) {
//   const reviews = {
//     product_id: ranProdId(100),
//     product_name: ranProdName(),
//     username: ranUserName(),
//     title: ranTitle(),
//     review: ranReview(),
//     rating: ranRating(),
//     buy_again: ranTrueFalse(),
//     would_recommend_to_friend: ranTrueFalse(),
//     play_experience: ranRating(),
//     difficulty_level: ranRating(),
//     value_for_money: ranRating(),
//     helpful_count: ranHelpUnHelp(),
//     unhelpful_count: ranHelpUnHelp(),
//   };
//   reviewsArray.push(reviews);
//   count += 1;
// }

// console.timeEnd('start');

// (async () => {
//   const csv = new ObjectsToCsv(reviewsArray);
//   await csv.toDisk('./database/reviews.csv');
//   console.log('done');
// })();

// const query = `INSERT INTO reviews (product_id, product_name, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count)
//  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
