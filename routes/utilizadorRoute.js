const express = require('express')
const connection = require('../public/dbcon')
const utilizadorRoute = express.Router()

utilizadorRoute.post('/', (req,res) => {
    const sql = 'INSERT INTO utilizadores (nomeutilizador,moradarua,datanascimento,telemovel,email,tipos) VALUES (?,?,?,?,?,?)'
    connection.query(sql,
        [    req.body.nomeutilizador
            ,req.body.moradarua
            ,req.body.datanascimento
            ,req.body.telemovel
            ,req.body.emails
            ,req.body.tipos],
        (err)=>{
            if(err){
                console.log(err)
                res.send('Ocorreu um erro na base de dados')
            }
            else{
                res.send('Utilizador inserido com suscesso')
            }
        })
})

module.exports = utilizadorRoute