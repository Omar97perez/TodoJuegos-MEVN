const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 3000);
app.use(express.json());

// rutas
app.use('/api/users', require('./routes/users'));
// static
app.use(express.static(path.join(__dirname, 'public')));;

// conexión bbdd
let databaseUser = "myTester";
let databasePassword = "xyz123";
let databaseHost = "10.6.128.98";
//let databaseHost = "localhost";
let databasePort = "27017";
let databaseName = "test";
let databaseConnectionOpts = "";
let remoteUrl = `mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`
mongoose.connect(remoteUrl, (err,res) => {
    if(!err){
        console.log("Mongoose Connected");
        app.listen(app.get('port'), ()=>{
            console.log(`Server API REST listening in http://`);
        });
    }
    else {
        throw err;
}
});

/*  JS Carrito */

// app.listen(app.get('port'), () => {
//     console.log(`server listening on port ${app.get('port')}`);
// })
