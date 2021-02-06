/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable no-console */
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'altrandal',
  host: 'localhost',
  database: 'sdcproducts',
  password: 'password',
  port: 5432,
});

const getReviewsByProductId = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM reviews WHERE product_id=$1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const postReviews = (req, res) => {
  console.log(req.body);
  const productId = parseInt(req.body.product_id);
  const userName = req.body.username;
  const title = req.body.title;
  const review = req.body.review;
  const rating = parseInt(req.body.rating);
  const buy = req.body.buy_again;
  const rec = req.body.would_recommend_to_friend;
  const play = parseInt(req.body.play_experience);
  const diff = parseInt(req.body.difficulty_level);
  const value = parseInt(req.body.value_for_money);
  const help = parseInt(req.body.helpful_count);
  const unHelp = parseInt(req.body.unhelpful_count);
  pool.query(`INSERT INTO reviews(product_id, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [productId, userName, title, review, rating, buy, rec, play, diff, value, help, unHelp], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(results);
  });
};

const client = new Client({
  user: 'altrandal',
  host: 'localhost',
  database: 'sdcproducts',
  password: 'password',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

module.exports = {
  getReviewsByProductId,
  postReviews,
};
