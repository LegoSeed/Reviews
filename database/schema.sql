-- If DATABASE EXISTS
DROP DATABASE IF EXISTS sdcproducts;
-- CREATE DATABASE
CREATE DATABASE sdcproducts;
-- \l to see created databases
-- \c to connect to created database
-- CREATE TABLE
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL,
  product_name VARCHAR(50) NOT NULL,
  PRIMARY KEY(product_id)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE IF NOT EXISTS reviews (
  reviews_id SERIAL PRIMARY KEY,
  product_id int NOT NULL,
  username VARCHAR(50) NOT NULL,
  title VARCHAR(50) NOT NULL,
  review VARCHAR(600) NOT NULL,
  rating int NOT NULL,
  buy_again boolean NOT NULL,
  would_recommend_to_friend boolean NOT NULL,
  play_experience int NOT NULL,
  difficulty_level int NOT NULL,
  value_for_money int NOT NULL,
  helpful_count int NOT NULL,
  unhelpful_count int NOT NULL,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES products(product_id)
);

-- ADD RECORDS TO TABLE
INSERT INTO reviews (product_id, username, title, review, rating, buy_again, would_recommend_to_friend, play_experience, difficulty_level, value_for_money, helpful_count, unhelpful_count) VALUES (
1, 'ryan', 'super awesome', 'lajdsflkjsalkdjf;lasdjflkdsajf', 3, true, true, 3, 4, 5, 43, 22);

INSERT INTO products (product_name) VALUES ('JOEY AND THOMAS');