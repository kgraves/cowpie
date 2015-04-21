var db = require('../db');
var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cowpie' });
});

router.get('/beef', function(req, res, next) {
  res.render('select', {
    groups: db.beef
  });
});

router.get('/dairy', function(req, res, next) {
  res.render('select', {
    groups: db.dairy
  });
});

router.get('/dairygoat', function(req, res, next) {
  res.render('select', {
    groups: db.dairyGoat
  });
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
