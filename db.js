const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  newProfile: newProfile
}

function getUsers (db = connection) {
  return db('users')
  .select()
}

function getUser (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select('name', 'email', 'profile_image', 'url')
}

function newUser (userName, userEmail, db = connection) {
  return db('users')
  .insert({
    name: userName, 
    email: userEmail
  }) 
}

function newProfile (img, url, db = connection) {
  return db('profiles')
  .insert({ 
    profile_image: img,
    url: url
  })
}

