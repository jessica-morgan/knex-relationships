const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/profileform', (req, res) => {
  res.render('form')
})

router.post('/profileform', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  db.newUser(name, email)
  .then(db.newProfile)
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

module.exports = router
