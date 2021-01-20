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

  test('Verify format of product objects returned', async (done) => {
    jest.useFakeTimers();
    const resp = await request(app).get('/reviews');
    expect(resp.body[0]._id).toBeTruthy();
    expect(resp.body[0].product_id).toBeTruthy();
    expect(resp.body[0].product_name).toBeTruthy();
    expect(resp.body[0].username).toBeTruthy();
    expect(resp.body[0].title).toBeTruthy();
    expect(resp.body[0].review).toBeTruthy();
    expect(resp.body[0].rating).toBeTruthy();
    expect(resp.body[0].buy_again).toBeDefined();
    expect(resp.body[0].would_recommend_to_friend).toBeDefined();
    expect(resp.body[0].play_experience).toBeDefined();
    expect(resp.body[0].difficulty_level).toBeDefined();
    expect(resp.body[0].value_for_money_).toBeDefined();
    expect(resp.body[0].helpful_count).toBeDefined();
    expect(resp.body[0].unhelpful_count).toBeDefined();
    expect(resp.body[0].createdAt).toBeDefined();
    expect(resp.body[0].updatedAt).toBeDefined();
    done();
  });
});
