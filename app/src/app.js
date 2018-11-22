'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const api = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})

module.exports = app
