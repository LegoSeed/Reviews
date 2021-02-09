/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // target is the VUs
  stages: [
    { duration: '1s', target: 20 },
    { duration: '1s', target: 425 },
    { duration: '60s', target: 425 },
  ],
};

const review = {
  product_id: Math.floor(Math.random() * 1000001).toString(),
  username: 'Billy Joe',
  title: 'Some Random Title',
  review: 'Random Paragraph that might mean something important',
  rating: '5',
  buy_again: true,
  would_recommend_to_friend: true,
  play_experience: '4',
  difficulty_level: '4',
  value_for_money: '4',
  helpful_count: '75',
  unhelpful_count: '45',
};

export default function () {
  http.post('http://0.0.0.0:3002/reviews', review);
  sleep(1);
}
