const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Review = require('../database/reviews.js');
// const Overview = require('../database/overview')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', (req, res) => {
  res.send('Hello from the server!');
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
  console.log(`Server listening at localhost:${3000}!`);
});
