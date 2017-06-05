var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('users').then(allUsers => {
    res.json(allUsers)
  })
})

router.get('/:id', function (req, res, next) {
  knex('users').where('id', req.params.id).then(thisUser => {
    res.json(thisUser)
  })
  .catch(err => next(err))
})

router.post('/', function (req, res, next) {
  knex('users').insert(req.body, '*').then(() => {
    res.status(201).json(req.body)
  })
})

router.put('/:id', function (req, res, next) {
  knex('users').where('id', req.params.id).update(req.body)
  .then((updatedUser) => {
    res.status(200).json(req.body)
  })
})

router.delete('/:id', function (req, res, next) {
  console.log(req.params.id)
  knex('users').where('id', req.params.id).del().returning('*')
  .then((thisUser) => {
    res.status(210).json(thisUser)
  })
})

module.exports = router
