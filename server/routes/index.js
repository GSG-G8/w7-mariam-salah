const router = require('express').Router();
const func = require('../database/queries');

router.get('/posts', (req, res) => {
  func.getpost()
    .then((result) => res.json(result.rows))
    .catch(() => console.error('error :', error));
});

// router.get('/cratepost', createnewpost);

module.exports = router;
