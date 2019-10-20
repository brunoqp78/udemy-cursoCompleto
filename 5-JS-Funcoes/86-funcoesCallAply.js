// existe várias formas de chamar uma função
// - direto no escopo global (programa)
// - automatica com IIFE
// e as duas dessa aula

// uma função é um tipo em JS
// a diferença entre call e apply e a forma de passar os parametros
function getPreco(imposto=0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc)* (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589.45,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1


console.log(getPreco())
console.log(produto.getPreco(0.2))
console.log(produto.getPreco())

// call e apply permite chamar a função e passar dados para ela, inclusive TAD
const carro = {preco: 49999, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))// parametros normais
console.log(getPreco.apply(carro, [0.17, '$']))//parametros como vetor

//acessando os dados definidos como global
console.log(getPreco.apply(global, [0.17, '$']))//parametros como vetor