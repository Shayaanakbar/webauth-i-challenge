exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', users => {
    users.increments();
    users.string('username')
      .notNullable()
      .unique()
    users.string('password')
      .notNullable()
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists('users')
};