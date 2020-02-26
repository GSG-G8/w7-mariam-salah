const connection = require('./connection');
const {join}= require('path');

const { readFileSync }=require('fs');

const sql=readFileSync(join(__dirname,'built.sql')).toString();

connection
    .query(sql)
    .then(() => {
      console.log('create tables done successfully');
    }).catch((err) => {
      console.error('eror',err);
    });
  