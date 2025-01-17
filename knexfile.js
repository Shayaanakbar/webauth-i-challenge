// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.sqlite3'
    },
  migrations: {
    filename: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
    useNullAsDefault: true
  },
};
