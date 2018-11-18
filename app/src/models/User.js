const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new Schema({
  name: String,
  surname: String,
  username: {type: String, unique: true},
  email: {type: String, unique: true, lowercase: true},
  password: {type: String, select: false},
  birthdate: Date,
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,
  gender: String
})

UserSchema.pre('save', (next) => {
  let user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
