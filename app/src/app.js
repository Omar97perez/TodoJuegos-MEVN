// 'use strict'
//
// const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const app = express()
// const api = require('./routes/users')
//
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'public')))
//
// app.use('/api', api)
// app.get('/login', (req, res) => {
//   res.render('login')
// })
//
// module.exports = app

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/Aplicacion',{useNewUrlParser: true})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'Public'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
