'use strict'

const services = require('../authentication/backend/_services/jwt')
const userService = require('../authentication/backend/users/user-service')

function isRoot (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  const token = req.headers.authorization // .split(' ')[1]
  console.log(token)
  services.decodeToken(token)
    .then(response => {
      userService.getById(response)
      .then(payload => {
        if(payload.email != "root@root.com") {
          return res.status(403).send({ message: 'No tienes autorización' })
        }
        req.user = response
        //next()
      })
      .catch(response => {
        // console.log(response)
        res.status(response.status)
      })
      req.user = response
      next()
      
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isRoot