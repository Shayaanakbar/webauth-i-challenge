// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
  migrations: {
    filename: './data/auth/sqlite3'
  },
  seeds: {
    directory: './data/seeds'
  },
    useNullAsDefault: true
  },
};
