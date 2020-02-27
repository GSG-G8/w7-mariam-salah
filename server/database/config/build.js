const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();
const build = () => {
  connection
    .query(sql)
    .then(() => {
      console.log('create tables done successfully');
    }).catch((err) => {
      console.error('eror', err);
    });
};
module.exports = build;
