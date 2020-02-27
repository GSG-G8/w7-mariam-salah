const router = require('express').Router();
const func = require('../database/queries');

router.get('/posts', (req, res) => {
  func.getpost(req.body)
    .then((result) => res.json(result.rows))
    .catch(() => console.error('error :', error));
});

router.post('/create-post', (req, res) => {
  func.createpost(req.body)
    .then(() => res.redirect('/'))
    .catch(() => console.error('error :', error));
});

module.exports = router;
