var express = require('express');
var router = express.Router();
var knex = require('../db/connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('dreams').then(allDreams => {
    res.render('index', {allDreams});
  })
});

module.exports = router;
