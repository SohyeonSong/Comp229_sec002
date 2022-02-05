var express = require('express');
var router = express.Router();
let userController = require('../controller/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/sohyeon', userController.sohyeon);


module.exports = router;
