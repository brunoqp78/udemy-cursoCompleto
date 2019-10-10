//fazer uma filtragem e retornar um sub-array do original
//manter o mesmo e modificar os valores = map
//copiar parte baseado em filtro: filter

const produtos =[
    {nome: 'Notebook', preco:2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199, fragil: true},
    {nome: 'Copo de Vidro', preco:12.49, fragil: true},
    {nome: 'Copo de Plástico', preco:18.99, fragil: false}
]

//p - representa cada um dos elementos do vetor
console.log(produtos.filter(function(p){
    // false não estara presente e true estara presente no novo vetor
    return p.preco > 2500
}))
console.log(produtos.filter(function(p){
    // false não estara presente e true estara presente no novo vetor
    return false
}))

console.log(produtos.filter(function(p){
    // false não estara presente e true estara presente no novo vetor
    return p.fragil
}))

console.log(produtos.filter(function(p){
    // false não estara presente e true estara presente no novo vetor
    return p.preco > 500 && p.fragil
}))

const prodCaros = p => p.preco > 500
const prodFrageis = p => p.fragil

console.log(produtos.filter(prodCaros).filter(prodFrageis))

