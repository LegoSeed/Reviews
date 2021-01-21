/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Review = require('../database/reviews.js');
const Overview = require('../database/overview');
const OverviewMethods = require('./overview');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', async (req, res) => {
  try {
    const results = await Review.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/overview', async (req, res) => {
  try {
    const results = await Overview.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/reviews', (req, res) => {
  res.send(req.body);
  // will need to send product id and crate new review with this
  try {
    const results = Review.create(req.body);
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }

  // call helper functions that update the review summary module
});

module.exports = app;
