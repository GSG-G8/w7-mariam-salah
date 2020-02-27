const { getpost, createpost } = require('../database/queries');

const getallpost = (req, res) => {
  getpost().then((data) => {
    res.json(data.rows);
  })
    // eslint-disable-next-line no-console
    .catch(console.error);
};
const createnewpost = (req, res) => {
  const data = req.body;
  createpost(data);
  res.json({ msg: 'data created succ' });
};

module.exports = {
  getallpost,
  createnewpost,
};
