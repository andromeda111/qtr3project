'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dreams', function(t){
    t.increments()
    t.string('dream_date').notNullable()
    t.text('body').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dreams')
}
