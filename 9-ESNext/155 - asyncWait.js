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

// recurso do ES8
// Objetivo simplificar o uso de promises...

let obterAluno = async () => {
    const ta = await getTurma('A') // await só executa em função marcada como async
    const tb = await getTurma('B') 
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc) // só chega aqui quando as 3 anteriores forem executadas
} // retorna um objeto AsyncFunction

obterAluno()
    .then(nomes => nomes.map(a=>a.nome))
    .then(dados => console.log(dados))
    .catch(e => console.log(e))