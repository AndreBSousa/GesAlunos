const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./public/dbcon.js');
app.use(express.static('./public'));


//Rotas para os pedidos
app.use('/',require('./routes/mainRoute'))



const port = 3006;

app.listen(port, function (){
  console.log("Listenning on port: " + port)
})



app.post('/inseriralunos', (req,res)=>{
  console.log(req.body)
  res.send('Cheguei bem e de saude!')
})