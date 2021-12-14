

app.get('/tipos', function (req, res) {
    connection.query('SELECT * FROM tipos',(err,result) => {
        if(err)
            res.json('Ocorreu um problema na base de dados...')
        else{
            res.json(result)
        }
      })
  })
  