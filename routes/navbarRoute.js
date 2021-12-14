const express = require('express');
const path = require('path');
const mainRoute = express.Router()

mainRoute.get('/navbar', function (req, response) {
    response.sendFile(path.join(__dirname, './public/navbar.html'))
  }) 

  module.exports = navbarRoute