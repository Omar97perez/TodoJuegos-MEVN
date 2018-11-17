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
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

$input.val(value);

});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
});

$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});
// app.listen(app.get('port'), () => {
//     console.log(`server listening on port ${app.get('port')}`);
// })
