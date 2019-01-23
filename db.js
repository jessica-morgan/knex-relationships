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
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select()
}

function newUser (userName, userEmail, db = connection) {
  return db('users')
  .insert({
    name: userName, 
    email: userEmail
  }) 
}

function newProfile (db = connection) {
  return db('profiles')
  .insert({
    user_id: id[0], 
    picture: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Somniosus_microcephalus_okeanos.jpg',
    url: 'http://www.ilovenature.world/i-love-nature-news/2018/8/11/400-year-old-shark-found-in-the-arctic-may-be-the-oldest-living-vertebrate-alive'})
}
