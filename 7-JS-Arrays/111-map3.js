//implementar o map
// Minha solução . ficou com um problema, pois retorno já o dado e não usei a callback
Array.prototype.map2 = function(callback){
    const r = []
    for(let i=0;i<carrinho.length;i++){
        const dado = callback(this[i])
        r[i] = dado
    }
    return r
}
// solução professor, a correta
Array.prototype.map3 = function(callback){
    const newArray = []
    for (let i=0; i< this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let r = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(r)

r = carrinho.map3(paraObjeto).map3(apenasPreco)
console.log(r)