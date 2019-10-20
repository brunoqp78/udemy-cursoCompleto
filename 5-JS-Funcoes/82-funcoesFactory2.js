// funções construtora dinamica, que recebe valores
function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Coca', 2.4))
console.log(criarProduto('Ipad', 2400))