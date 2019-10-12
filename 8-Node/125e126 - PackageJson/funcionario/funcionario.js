//http://files.cod3r.com.br/curso-js/funcionarios.json
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
//cliente web
const axios = require('axios')

// desafio, utilizar os funcionarios para encontrar a mulher chinesa que ganha o menor salario
// minha solucao
axios.get(url).then(response => {
    // funcionarios é um vetor de objetos
    const funcionarios = response.data
    // arrowFunction que retorna o objeto p que tenha o pais igual a China
    const chineses = p => p.pais == 'China'
    // arrowFunction que retorna o objeto g que tenha o genero igual a F
    const mulheres = g => g.genero == 'F'
    // filtrando e gerando novo vetor apenas com mulheres chinesas
    const mulheresChinesas = funcionarios.filter(chineses).filter(mulheres)
    // pegar a primeira mulher como base
    let mulherMS = mulheresChinesas[0]
    let mediaS = 0
    mulheresChinesas.forEach(function (mulher) {
        if (mulher.salario < mulherMS.salario) {
            mulherMS = mulher
        }
        mediaS += mulher.salario
    })
    mediaS /= mulheresChinesas.length
    console.log(`A senhora ${mulherMS.nome} tem o menor salário, com valor de ${mulherMS.salario}.\nA média dos salários das mulheres é ${mediaS}.`)
})

//solucao professor
// filtrar chineses
// filtrar mulheres
// reduzir para o menor salario

const chineses2 = f => f.pais === 'China'
const mulheres2 = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    // funcionarios é um vetor de objetos
    const funcionarios2 = response.data
    const func2 = funcionarios2
        .filter(chineses2)
        .filter(mulheres2)
        .reduce(menorSalario)
    console.log(func2)
})