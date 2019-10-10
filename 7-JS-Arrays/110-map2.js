const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// minha solução
// Retornar um array apenas com os preços
// converti o JSON em objeto com a função parse e retornei o preco
const funcaoMap = e => JSON.parse(e).preco

let r = carrinho.map(funcaoMap)
console.log(r)

// solucao professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

r = carrinho.map(paraObjeto).map(apenasPreco)
console.log(r)