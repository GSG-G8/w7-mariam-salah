const router = require('express').Router();
const { getallpost, createnewpost } = require('../controller');

router.get('/posts', getallpost);
router.get('/cratepost', createnewpost);
module.exports = router;
