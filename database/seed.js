/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-console */
const faker = require('faker');
const { Pool } = require('pg');
const Review = require('./reviews');

const pool = new Pool({
  user: 'altrandal',
  host: 'localhost',
  port: 5432,
  password: 'password',
  database: 'sdcproducts',
});

const legos = ['Colosseum', 'NES', 'Wooden Minifigure', 'Harley-Davidson', 'Demon Bull King', 'Fire Command Unit', "Monkie Kid's Cloud Jet", 'Stormtrooper', 'Hogwarts Castle', '1989 Batmobile', 'Dinosaur Fossils', 'AT-AT', 'Milennium Falcon', 'Demon Bull King', 'Iron Bull Tank', 'X-1 Ninja Charger', 'Boulder Blaster', 'Overlord Dragon', 'Elsa and the Nokk', ' MF Set', 'Monkey King', 'Unicorn', 'Indominus Rex'];

const ranProdId = (max) => Math.floor(Math.random() * Math.floor(max));
const ranProdName = () => legos[Math.floor(Math.random() * legos.length)];
const ranUserName = () => faker.internet.userName();
const ranTitle = () => faker.random.word();
const ranReview = () => faker.lorem.paragraph();
const ranRating = () => Math.floor(Math.random() * 5) + 1;
const ranTrueFalse = () => !(Math.floor(Math.random() * Math.floor(2)));
const ranHelpUnHelp = () => Math.floor(Math.random() * 90);

const query = `INSERT INTO reviews (product_id, product_name, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

let count = 0;
const max = 1;

while (count < max) {
  const params = [
    ranProdId(100),
    ranProdName(),
    ranUserName(),
    ranTitle(),
    ranReview(),
    ranRating(),
    ranTrueFalse(),
    ranTrueFalse(),
    ranRating(),
    ranRating(),
    ranRating(),
    ranHelpUnHelp(),
    ranHelpUnHelp(),
  ];
  console.log(params);
  pool.query(query, params);
  count += 1;
}
