var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('dreams').then(allDreams => {
    res.json(allDreams)
  })
})

router.get('/:id', function (req, res, next) {
  knex('dreams').where('id', req.params.id).then(thisDream => {
    res.json(thisDream)
  })
  .catch(err => next(err))
})

router.post('/', function (req, res, next) {
  knex('dreams').insert(req.body, '*').then(() => {
    res.status(201).json(req.body)
  })
})

router.put('/:id', function (req, res, next) {
  knex('dreams').where('id', req.params.id).update(req.body)
  .then((updatedDream) => {
    res.status(200).json(req.body)
  })
})

router.delete('/:id', function (req, res, next) {
  console.log(req.params.id)
  knex('dreams').where('id', req.params.id).del().returning('*')
  .then((thisDream) => {
    res.status(210).json(thisDream)
  })
})

module.exports = router
