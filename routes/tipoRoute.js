const express = require('express');
const tipoRoute = express.Router()
const connection = require('../public/dbcon');


tipoRoute.get('/', function (req, res) {
    connection.query('SELECT * FROM tipos',(err,result) => {
        if(err)
            res.json('Ocorreu um problema na base de dados...')
        else{
            res.json(result)
        }
      })
  })

  module.exports = tipoRoute
  