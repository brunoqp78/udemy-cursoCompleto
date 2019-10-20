// função map, importante para Algoritmos
// faz uma transformação no array, modificando os dados
// aplica uma operação em todos os elementos do vetor autormaticamente
// faz o mapeamento de um vetor em um novo do mesmo tamanho

const nums = [1,2,3,4,5,6]

// map é um for com propósito definido pelo programador
let resultado = nums.map(function(e){
    return e*2;
})

console.log(nums)
console.log(resultado)

//map não modifica o array atual
//podemos fazer um encadeamento de chamadas map

const soma10 = e => e + 10 // arrowfunction tem return implicito
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)