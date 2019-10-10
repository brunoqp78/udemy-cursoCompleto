//Criar o meu Filter
//Minha solução
Array.prototype.filter2 = function(callback){
    const r=[]
    let cont=0
    for(let i=0;i<this.length;i++){
        if (callback(this[i]))
            r[cont] = this[i]
    }
    return r
}

//solucao professor
Array.prototype.filter3 = function(callback){
    const newArray=[]
    for(let i=0;i<this.length;i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos =[
    {nome: 'Notebook', preco:2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199, fragil: true},
    {nome: 'Copo de Vidro', preco:12.49, fragil: true},
    {nome: 'Copo de Plástico', preco:18.99, fragil: false}
]

const prodCaros = p => p.preco > 500
const prodFrageis = p => p.fragil

console.log(produtos.filter2(prodCaros).filter2(prodFrageis))

console.log(produtos.filter3(prodCaros).filter3(prodFrageis))
