const connection = require('../config/connection');

const getpost = () => {
  const sql = connection.query('select * from posts');
  return sql;
};
const createpost = (data) => {
  return connection.query('INSERT INTO posts(title,detail,img) VALUES ($1,$2,$3)',
    [data.title, data.detail, data.img]);
};

module.exports = {
  getpost,
  createpost,
};
