var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cowpie' });
});

router.get('/beef', function(req, res, next) {

});

router.get('/dairy', function(req, res, next) {

});

router.get('/dairygoat', function(req, res, next) {

});

router.get('/goat', function(req, res, next) {

});

router.get('/hog', function(req, res, next) {

});

router.get('/lamb', function(req, res, next) {

});

router.get('/pygmygoat', function(req, res, next) {

});

router.get('/sheep', function(req, res, next) {

});

router.get('/showmanship', function(req, res, next) {

});

module.exports = router;
