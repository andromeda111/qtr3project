
exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, email: 'alyssa.m.evans@gmail.com', username: 'missalyss', password: 'pw'},
        {id: 2, email: 'jmseymour111@gmail.com', username: 'andromeda111', password: 'pw'},
        {id: 3, email: 'stefan.baatz@gmail.com', username: 'Baatzy', password: 'pw'},
        {id: 4, email: 'acfergin@msn.com', username: 'amaliaclaire', password: 'pw'}
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX (id) FROM users))"
      )
    }).catch(function (error) {
      console.error('Red Alert! ', error)
    })
}
