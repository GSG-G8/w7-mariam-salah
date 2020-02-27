const connection = require('../config/connection');

const getpost = () => {
  connection.query('select * from posts');
};
const createpost = (data) => {
  const { title } = data;
  const { detail } = data;
  const { img } = data;
  connection.query('INSERT INTO posts(title,detail,img) VALUES ($1,$2,$3)', [title, detail, img]);
};

module.exports = {
  getpost,
  createpost,
};
