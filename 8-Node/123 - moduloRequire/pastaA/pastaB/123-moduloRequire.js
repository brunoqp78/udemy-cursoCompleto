// subir vários níveis e acessar módulos do node
// no windows e mac, não há problema de casesensitive, no linux há. então respeite o nome correto do arquivo
// a melhor forma é essa
const moduloA = require('../../../121 - modulos/121-moduloA')

// podemos pegar o caminho path do arquivo, problema na implantação
// não usar essa forma
const moduloB = require('/home/turin-turambar/Documentos/udemy/udemy-cursoCompleto/8-Node/121 - modulos/121-moduloB.js')
console.log(moduloA.ola)
console.log(moduloB.boaNoite())

// primeiro crie a pasta saudacao dentro de node_modules
// em saudacao crie o arquivo index.js, que sempre é executado quando se importa o modulo
// não precisa indicar o endereco, ele busca em node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// acessar diretamente a pasta e pegar o index.js dela
const c = require('./pastaC')
console.log(c.ola2)

// importar um modulo nativo do node - modulesCore
const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8081)
// esse código ficara executando e servindo um serviço na porta 8080.
// use o browser para acessar: localhost:8080
