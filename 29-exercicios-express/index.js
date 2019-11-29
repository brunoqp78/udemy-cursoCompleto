// importa o express
const express = require('express')
// representa a aplicação
const app = express()

const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// saudacao é um modulo middleware criado por nós... entao pode ser utilizado 
app.use(saudacao('Guilherme'))


app.get('/clientes/relatorio', (req, res) => {
     res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
     res.send(`Cliente ${req.params.id} selecionado!`)
})



// a ordem influencia
// uma função middleware resolve e precisa ter req, res e next. Next tem que ser chamado no corpo da função
app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    // permite chamar outros tratamentos para a url
    next()
})


app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1 },
            {id: 34, name: 'Bia', position: 2 },
            {id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

     next()
    
//     // res.json({
//     //     name: 'iPad 32Gb',
//     //     price: 1899.00,
//     //     discount: 0.12
//     // })

//     // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')
})


  app.use((req, res) => {
      console.log('Depois...')
  })

//use é aplicado para qualquer tipo de requisição
//  app.use((req, res) => {
//     res.send('Estou <b> bem</b>')
// })

// app.get((req, res) => {
//     res.send('Estou <b> bem</b>')
// })


// executa e fica ouvindo a porta 3000
app.listen(3001, () => {
    console.log('Backend executando...')
})