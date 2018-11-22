'use strict'

const mongoose = require('mongoose')
const config = require('./config/config_db')
const app = require('./app')
// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000

mongoose.connect(config.db, (err, res) => {
  if (!err) {
    console.log('Mongoose Connected')
    app.listen(port, () => {
      console.log(`Server API REST listening in http://localhost/${port}`)
    })
  } else {
    throw err
  }
})

/*  JS Carrito */

// app.listen(app.get('port'), () => {
//     console.log(`server listening on port ${app.get('port')}`);
// })
