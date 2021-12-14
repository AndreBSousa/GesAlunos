const { clear } = require('console');
const express = require('express');
const app = express();
const connection = require('./public/dbcon.js');
app.use(express.static('./public'));


//Rotas para os pedidos
app.use('/',require('./routes/mainRoute'))
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/tipos',require('./routes/tipoRoute'))
app.use('/utilizador',require('./routes/utilizadorRoute'))

app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: false}));


const port = 3006;

app.listen(port, function (){
  console.log("Listenning on port: " + port)
})

