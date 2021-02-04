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

const getReviewsByProductId = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM reviews WHERE product_id=$1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
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
};
