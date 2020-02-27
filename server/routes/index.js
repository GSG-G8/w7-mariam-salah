const router = require('express').Router();
const func = require('../database/queries');

router.get('/posts', (req, res) => {
  func.getpost(req.body)
    .then((result) => res.json(result.rows))
    .catch(console.error);
});

router.post('/create-post', (req, res) => {
  const data = req.body;
  func.createpost(data)
    .then(res.redirect('/'))
    .catch(console.error);
});
module.exports = router;
