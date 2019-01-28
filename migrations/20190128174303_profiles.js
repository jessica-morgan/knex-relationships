exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.string('url')
      table.string('profile_image')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
  }