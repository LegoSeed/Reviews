/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server/index');

describe('Test the root path', () => {
  test('It should respond to the GET method', async (done) => {
    jest.useFakeTimers();
    request(app)
      .get('/reviews')
      .expect(200);
    done();
  });
});
