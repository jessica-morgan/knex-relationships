exports.up = (knex, Promise) => {
    return knex.schema.createTable('blogPosts', (table) => {
      table.increments('id').primary()
      table.integer('userid').references('users.id')
      table.string('title')
      table.string('entry')
      table.string('image')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('blogPosts')
  }