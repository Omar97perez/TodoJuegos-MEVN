const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

// conexión bbdd
const mongoose = require('mongoose');
// remoteUrl : `mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`,
mongoose.connect('mongodb://myTester:xyz123@10.6.128.98:27017/test?'); 
// rutas
app.use('/api/users', require('./routes/users'));
// static
app.use(express.static(path.join(__dirname, 'public')));;

app.listen(app.get('port'), () => {
    console.log(`server listening on port ${app.get('port')}`);
})
