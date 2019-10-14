// definimos a porta do app
const porta = 3003

// cria o app baseado no framework express
const express = require('express')
const app = express()
const bodyParser = require('body-parser') //aula 3
const bd = require('./bd') // aula2

// para qualquer requisição se for urlenconded ele faz o parser
app.use(bodyParser.urlencoded({ extended: true}))

// conteúdo da aula 1 do projeto express
//nome do processo
const processoAula1 = '/produtosAula1'
// arrow Function que responde ao processo
// ela é baseada no middleware, 
const func1 = (req, res, next)=>{
    console.log("Middleware....")
    next()
}


const retornoAula1 = (req, res, next)=>{
    res.send({ nome: 'Notebook', preco: 123.45})//converter para JSON
}

const naoDefinido = (req, res, next)=>{
    res.send('Não definido')
}

//exemplo a mais do uso do middleare
//criando um processo get baseado em middleware, executa em cadeia
// com o middleware, definimos uma sequencia de ações que precisam ser realizadas para atender uma requisição
app.get(processoAula1, func1) // como há o next(), ele chama o proximo. Se não tiver ele não retorna o proximo
app.get(processoAula1, retornoAula1)

//criando um processo post
app.post(processoAula1, retornoAula1)

// conteúdo da aula 2 do projeto express
//nome do processo
const processo = '/produtos'
const campo = 'id'

const retornoTodos = (req, res, next)=>{
    res.send(bd.getProdutos())// chama o modulo bd
    //res.send('teste')// chama o modulo bd
}
const retornoUm = (req, res, next)=>{
    res.send(bd.getProduto(req.params.id))
}
const salvaUm = (req, res, next)=>{
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
}
const alteraUm = (req, res, next)=>{
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
}

const excluiUm = (req, res, next)=>{
    const produto = bd.excluirProduto(req.params.id)
    res.send(`O produto ${produto.nome} foi excluido`) // JSON
}


app.get(processo, retornoTodos) // http://localhost:3003/produtos
app.get(`${processo}/:${campo}`, retornoUm) //http://localhost:3003/produtos/1
// delete é utilizado para excluir
app.delete(`${processo}/:${campo}`, excluiUm)
// put é utilizado para modificar
app.put(`${processo}/:${campo}`, alteraUm)
// post envia dados para o servidor
app.post(processo, salvaUm)
/*
No postman
1. Selecione Post
2. Selecione a aba Body
3. Selecione x-www-form-urlencoded
*/


//responde a qualquer um tipo de requisição (get, post, etc) e para qualquer processo
// comentei na aula 3
//app.use(naoDefinido)


// faça a app ouvir a porta 3003 e com sucesso iimprimir a mensagem
app.listen(porta, () =>{
    console.log(`O Servidor executando na porta ${porta}.`)
})