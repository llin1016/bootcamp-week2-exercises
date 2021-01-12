const users = require('./20200112135536_users.js')

exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('requestor_id')
      .notNullable()
      .references(users.id)
      
    table
        .uuid('requested_id')
        .notNullable()
        .references(users.id)
    table
        .timestamps(true)

    table
        .boolean('status')
        .defaultTo(false)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  