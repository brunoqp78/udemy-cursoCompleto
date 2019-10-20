const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp)=>{
    console.log(req.body)
    resp.send('<h2>Parabéns, o usuário foi incluído!!</h2>')
})

app.post('/usuarios/:id', (req, resp)=>{
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    resp.send(`<h2>Parabéns, o usuário com id = ${id} foi modificado!!</h2>`)
})


app.listen(3003)

// precisa executar o comando node.js no terminal
// irá utilizar o express como servidor