/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
require('newrelic');
const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews/:id', db.getReviewsByProductId);
app.post('/reviews', db.postReviews);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at localhost:${PORT}!`);
});
