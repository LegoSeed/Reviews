/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

const review = {
  product_id: Math.floor(Math.random() * 10000001).toString(),
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
  http.post('http://localhost:3000/reviews}', review);
  sleep(1);
}
