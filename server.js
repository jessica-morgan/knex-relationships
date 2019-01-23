const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/userRoutes')

const server = express()

// Middleware

server.engine('hbs', hbs({
  defaultLayout: 'index',
  extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

module.exports = server
