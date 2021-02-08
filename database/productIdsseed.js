/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-console */
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');

const writeProductIds = fs.createWriteStream('./productIds.csv');
writeProductIds.write('product_name\n');

const legos = ['Colosseum', 'NES', 'Wooden Minifigure', 'Harley-Davidson', 'Demon Bull King', 'Fire Command Unit', "Monkie Kid's Cloud Jet", 'Stormtrooper', 'Hogwarts Castle', '1989 Batmobile', 'Dinosaur Fossils', 'AT-AT', 'Milennium Falcon', 'Demon Bull King', 'Iron Bull Tank', 'X-1 Ninja Charger', 'Boulder Blaster', 'Overlord Dragon', 'Elsa and the Nokk', ' MF Set', 'Monkey King', 'Unicorn', 'Indominus Rex'];

function writeTenMillionProductIds(writer, callback) {
  let max = 1000000;
  let count = 0;
  function write() {
    let ok = true;
    do {
      max -= 1;
      count += 1;
      const ranProdName = () => legos[Math.floor(Math.random() * legos.length)];
      const data = `${ranProdName()}\n`;

      if (max === 0) {
        writer.write(data, callback);
      } else {
        ok = writer.write(data);
      }
    } while (max > 0 && ok);

    if (max > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

console.time('start');
writeTenMillionProductIds(writeProductIds, () => {
  writeProductIds.end();
  console.timeEnd('start');
});

/* Command for Copying CSV file into products table

COPY products(product_name)
FROM './productIds.csv'
DELIMITER ','
CSV HEADER;
*/
