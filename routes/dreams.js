var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('dreams').then(allDreams => {
    res.json(allDreams)
  })
})

router.get('/:user', function (req, res, next) {
  knex('dreams').where('user_username', req.params.user).then(thisUser => {
    res.json(thisUser)
  })
  .catch(err => next(err))
})

router.get('/:user/:id', function (req, res, next) {
  knex('dreams').where({user_username: req.params.user, id: req.params.id}).then(thisDream => {
    res.json(thisDream)
  })
  .catch(err => next(err))
})

router.post('/:user', function (req, res, next) {
  var newDream = {
    user_username: req.params.user, dream_date: req.body.dream_date, emotion: req.body.emotion, lucidity: req.body.lucidity, nightmare: req.body.nightmare, recurring: req.body.recurring, body: req.body.body, interpretation: req.body.interpretation
  }
  knex('dreams').insert(newDream, '*').then(() => {
    res.status(201).json(newDream)
  })
})

router.put('/:user/:id', function (req, res, next) {
  knex('dreams').where({id: req.params.id, user_username: req.params.user}).update(req.body)
  .then((updatedDream) => {
    res.status(200).json(req.body)
  })
})

router.delete('/:user/:id', function (req, res, next) {
  console.log(req.params.id)
  knex('dreams').where({id: req.params.id, user_username: req.params.user}).del().returning('*')
  .then((thisDream) => {
    res.status(210).json(thisDream)
  })
})

module.exports = router
