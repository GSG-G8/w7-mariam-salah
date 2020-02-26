const router = require('express').Router();
const testfunction=require('../controller');

router.get('/test',testfunction);

module.exports=router;