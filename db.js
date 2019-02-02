const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  newProfile: newProfile,
  newBlogPost: newBlogPost,
  getBlogPosts: getBlogPosts
}

function getUsers (db = connection) {
  return db('users')
  .select()
}

function getUser (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .first()
    .where('users.id', id)
    .select('name', 'email', 'profile_image as profileImage', 'url', 'users.id')
}

function newUser (userName, userEmail, db = connection) {
  return db('users')
  .returning('id')
  .insert({
    name: userName, 
    email: userEmail
  }) 
}

function newProfile (img, url, id, db = connection) {
  return db('profiles')
  // .returning('userid')
  .insert({ 
    user_id: id,
    profile_image: img,
    url: url
  })
}

function newBlogPost (userId, title, entry, image, db = connection) {
  return db('blogPosts')
  // .returning('userId')
  .insert({
    userId: userId,
    title: title,
    entry: entry,
    image: image
  })
}

function getBlogPosts (id, db = connection) {
  return db('blogPosts')
    .join('users', 'users.id', 'blogPosts.userid')
    .first()
    .where('blogPosts.userid', id)
    .select('name', 'title', 'entry', 'image')
}
