const router = require('express').Router();
const func = require('../database/queries');

router.get('/posts', (req, res) => {
  func.getpost()
    .then((result) => res.json(result.rows))
    .catch(console.error);
});

router.post('/create-post', (req, res) => {
  const data = req.body;
  func.createpost(data).catch(res.json({ error: 'error on insert data' }));
});
module.exports = router;
