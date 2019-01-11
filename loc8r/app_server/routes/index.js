var express = require('express');
var router = express.Router();
const ctrMain = require('../controller/main');

/* GET home page. */
router.get('/', ctrMain.index);

module.exports = router;
