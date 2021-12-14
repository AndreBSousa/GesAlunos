function initForm(){
    getNavbar()
    getTipos()
}

function getTipos(){
    const tipo = document.getElementById('tipos')
    fetch('http://localhost:3006/tipos')
    .then(res => res.json())
    .then( data =>{
        tipo.innerHTML +=  `<option selected></option>`
        tipo.innerHTML
        for(i in data){
            let op =
            `<option value="${data[i].idtipos}">${data[i].designacao}<option>`
            tipo.innerHTML += op
        }
    })
    
    
    .catch((err) => {
        alert('Erro no pedido')
    })
}





function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3006/navbar')
        .then(res => res.text())
        .then((html)=>{
            nbar.innerHTML += html
        })
        .catch(function(err){
            alert('Ocorreu um problema...')
        })

}

function inserir(){
    //obter valores introduzidos nas caixas
    const nome = document.getElementById('nome').value

    const morada = document.getElementById('morada').value

    const date = document.getElementById('data').value
  
    const telemovel = document.getElementById('telemovel').value

    const email = document.getElementById('email').value
  
    const tipo = document.getElementById('tipos').value

    //criar um objeto com os valores
    let objeto ={
        nomeutilizador: nome,
        moradarua: morada,
        datanascimento: data,
        telemovel: telemovel,
        email: email,
        tipos: tipo
    }

    //transformar o obgjeto em JSON
    let objetoJSON = JSON.stringify(objeto)
    //preparar as opçoes do pedido
    const options = {
        method:'POST',
        Headers: {
            'Content-type': 'application/json'
        },
        boddy: objetoJSON
    }
    //fazer fetch com as opçoes acima definidas
    fetch('http://localhost:3006/inseriralunos',options)
    .then(res => res.text())
    .then(text =>{
        alert(text)
    })
    .catch((err)=>{
        alert('Ocorreu um erro no pedido...')
    })
}