// acessar os arquivos:
// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

// com promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
// calback hell
getTurma('A').then((alunos) => {
    //console.log(alunos)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then((alunos) => {
        //console.log(alunos)
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then((alunos) => {
            //console.log(alunos)
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        }) // chame a função getTurma, que por callback executará internamente listaAlunos
    })
})

//usando promise apenas. all -> manda executar cada uma das funções e aguarda se e resolve ou reject para cada uma delas
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // as que são resolve são tratadas aqui, cada resultado esta em ...turma
    .then(nomes => nomes.map(aluno => aluno.nome)) // mapeamos apenas os nomes
    .then(nomes => console.log(nomes)) // imprimir
    .catch('Não foi possível converter') // os rejects são tratados aqui

    // vai mostrar o erro, pois não existe o arquivo D
getTurma('D').catch(e => console.log(e.message()))