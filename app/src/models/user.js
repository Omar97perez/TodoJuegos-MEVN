const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    birthdate: Date,
    gender: String
});

module.exports = mongoose.model('User', User);
