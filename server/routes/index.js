const router = require('express').Router();
const { getallpost, createnewpost } = require('../controller');

router.get('/posts', getallpost);
router.get('/createpost', createnewpost);

module.exports = router;
