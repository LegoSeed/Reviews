const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Review = require('../database/reviews.js');
// const Overview = require('../database/overview')

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', async (req, res) => {
  try {
    let results = await Review.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/reviews', (req, res) => {
  res.send(req.body);
  // try {
  // const result = ReviewModel.create(req.body)
  // } catch(err) {
  //   res.status(500).send(err)
  // }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at localhost:${3000}!`);
});
