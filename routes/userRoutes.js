const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('users', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(profile => {
      res.render('profiles', profile)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/user-form', (req, res) => {
  res.render('user-form')
})

router.post('/user-form', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  db.newUser(name, email)
  .then(function (id) {
    return res.redirect(`/new-profile/${id}`)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

router.get('/new-profile/:id', (req, res) => {
  const userId = Number(req.params.id)
  res.render('new-profile-form', {id: userId})
})

router.post('/new-profile/:id', (req, res) => {
  const id = Number(req.params.id)
  const imgUrl = req.body.profile_image
  const pageUrl = req.body.url
  db.newProfile(imgUrl, pageUrl, id)
  .then(function (userId) {
    return res.redirect(`/profile/${userId}`)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

router.get('/new-blog-post/:id', (req, res) => {
  const userId = Number(req.params.id)
  res.render('new-blog-post-form', {userId: userId})
})

router.post('/new-blog-post/:id', (req, res) => {
  const userId = Number(req.params.id)
  const title = req.body.title
  const entry = req.body.entry
  const image = req.body.image
  db.newBlogPost(userId, title, entry, image)
  .then(function () {
    return res.redirect(`/profile/${userId}/blog`)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

router.get('/profile/:id/blog', (req, res) => {
  const id = Number(req.params.id)
    db.getBlogPosts(id)
      .then(blogPost => {
        res.render('blog', blogPost)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })


module.exports = router
