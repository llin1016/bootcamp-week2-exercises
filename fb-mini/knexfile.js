/* eslint-disable no-console */
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env'),
})

console.log(process.env.DB_DATABASE)

// Default Knex settings
module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: true,
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 5,
    afterCreate(conn, done) {
      conn.on('error', error => {
        console.log('Database connection error!')
        console.log(error)
      })
      conn.query('SELECT version();', error => {
        if (error) {
          done(error, conn)
        } else {
          console.log('Database connection established successfully!')
          done(undefined, conn)
        }
      })
    },
  },

}
