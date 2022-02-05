/*
Authur : Sohyeon Song
StudentID : 301145311
Date : 2022-02-05
*/


var express = require('express');
var router = express.Router();
let indexcontroller = require('../controller/index');

/* GET home page. */
router.get('/', indexcontroller.home);

/* GET Projects page. */
router.get('/projects',indexcontroller.projects );

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

module.exports = router;
