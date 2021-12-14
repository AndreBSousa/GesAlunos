

app.get('/navbar', function (req, response) {
    response.sendFile(path.join(__dirname, './public/navbar.html'))
  }) 