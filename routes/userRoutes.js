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
    .then(profiles => {
      res.render('profiles', {profiles: profiles})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/user-form', (req, res) => {
  res.render('form')
})

router.post('/user-form', (req, res) => {
  // const id = Number(req.params.id)
  const name = req.body.name
  const email = req.body.email
  db.newUser(name, email)
  .then(function () {
    return res.redirect('/new-profile')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

router.get('/new-profile', (req, res) => {
  res.render('newprofile')
})

router.post('/new-profile', (req, res) => {
  const imgUrl = req.body.profile_image
  const pageUrl = req.body.url
  db.newProfile(imgUrl, pageUrl)
  .then(function () {
    return res.redirect('/home')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

module.exports = router
