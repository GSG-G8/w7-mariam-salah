const connection = require('../config/connection');

const getpost = () => connection.query('select * from posts');
const createpost = (data) => connection.query('INSERT INTO posts(title,detail,img) VALUES ($1,$2,$3)',
  [data.title, data.detail, data.img]);

module.exports = { getpost, createpost };
