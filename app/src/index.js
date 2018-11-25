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

/* JS Carrito */

/* JS Actualizar lista de juegos*/
  /*Drag and drop*/
FilePond.registerPlugin(
	
  FilePondPluginFileEncode,
	
	FilePondPluginFileValidateSize,
	
	FilePondPluginImageExifOrientation,
	
  FilePondPluginImagePreview
);

FilePond.create(
	document.querySelector('input')
);

  /*Hide form*/
//this toggles the visibility of our parent permission fields depending on the current selected value of the underAge field

// app.listen(app.get('port'), () => {
//     console.log(`server listening on port ${app.get('port')}`);
// })
