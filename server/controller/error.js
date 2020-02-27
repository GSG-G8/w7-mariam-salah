const path = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};
const serverError = (err, req, res, next) => {
  console.log(err);
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};
module.exports = {
  clientError,
  serverError,
};
