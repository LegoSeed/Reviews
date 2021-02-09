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

export default function () {
  http.get(`http://0.0.0.0:3002/reviews/${Math.floor(Math.random() * 1000001)}`);
  sleep(1);
}
