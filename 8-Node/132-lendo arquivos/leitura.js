// manipular arquivos
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... espera para continuar
// evitar
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... executa em paralelo
// recomendado
// criamos uma arrowFunction que será ativada quando a função de fs retornar o conteudo.
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// forma mais simples para ler JSON
// obrigadorio colocar a extensão .json
const config = require('./arquivo.json')
console.log(config.db)

//observe que o assincrono retornou por ultimo, pois abriu em paralelo...
// O assincrono foi o ultimo a imprimir

// assincrono, ler os arquivos presentes no diretorio atual
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

