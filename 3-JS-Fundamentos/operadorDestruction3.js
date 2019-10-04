// função recebe dois parametros de um objeto que contenha min e max. Se não houver assume os valores default
function rand({ min = 0, max = 1000 }) {
    // função Math.random gera um numero aleatorio entre 0 e 1
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
//rand recebe o objeto obj e o desconstroi removendo os valores de max e min
console.log(rand(obj))
console.log(rand({min:955}))

//destructuring e parametro padrão ajuda muito