'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('dreams', function (t) {
    t.increments()
    t.string('dream_date').notNullable()
    t.string('emotion')
    t.integer('lucidity')
    t.boolean('nightmare')
    t.boolean('recurring')
    t.string('user_username')
    t.text('body').notNullable()
    t.text('interpretation')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('dreams')
}
