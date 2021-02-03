-- If DATABASE EXISTS
DROP DATABASE IF EXISTS sdcproducts;
-- CREATE DATABASE
CREATE DATABASE sdcproducts;
-- \l to see created databases
-- \c to connect to created database
-- CREATE TABLE
CREATE TABLE IF NOT EXISTS products (
  product_id INT NOT NULL PRIMARY KEY,
  product_name VARCHAR(50) NOT NULL,
  username VARCHAR(20) NOT NULL,
  title VARCHAR(50) NOT NULL,
  review VARCHAR(600) NOT NULL,
  rating int NOT NULL,
  buy_again boolean NOT NULL,
  would_recommend_to_friend boolean NOT NULL,
  play_experience int NOT NULL,
  difficulty_level int NOT NULL,
  value_for_money int NOT NULL,
  helpful_count int NOT NULL,
  unhelpful_count int NOT NULL
  );
-- ADD RECORDS TO TABLE
INSERT INTO products (product_id, product_name, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count) VALUES (
  1, 'Lego truck', 'ryan', 'super swesome', 'lajdsflkjsalkdjf;lasdjflkdsajf', 3, true, true, 3, 4, 5, 43, 22);