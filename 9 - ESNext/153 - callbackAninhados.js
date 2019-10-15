// acessar os arquivos:
// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

// sem promise
const http = require('http')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', ()=>{
            callback(JSON.parse(resultado), letra) // será a função passada como parametro
            // callback é a chamada da função que foi passada na chamada dessa função
        })
    })
}

let nomes = []
// calback hell
getTurma('A', (alunos) =>{
    //console.log(alunos)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', (alunos) =>{
        //console.log(alunos)
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', (alunos) =>{
            //console.log(alunos)
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)            
        }) // chame a função getTurma, que por callback executará internamente listaAlunos
    }) 

})