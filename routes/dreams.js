var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('dreams').then(allDreams => {
    res.render('index', {allDreams})
  })
})

router.get('/:id', function (req, res, next) {
  knex('dreams').where('id', req.params.id).then(thisDream => {
    res.json(thisDream)
  })
  .catch(err => next(err))
})

module.exports = router
