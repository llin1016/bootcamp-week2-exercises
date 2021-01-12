const users = require('./20200112135536_users.js')

exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('user_id')
      .notNullable()
      .references(users.id)

    table
        .text('post')
        .notNullable()
    
    table
        .timestamps(true)
    
    table
        .integer('num_likes')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  