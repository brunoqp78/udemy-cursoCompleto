//objeto em js não é igual a JSom

// definir um objeto, com apenas {}... um objeto vazio
const produto1 = {}
produto1.nome = 'Samsung'

// podemos definir dinamicamente as propriedades do Objeto(TAD)
produto1.preco = 2000.40

// imprime uma coleção de pares(nome e valor)
console.log(produto1)

// outra forma, não se usa, evitar o espaço
produto1['Desconto maximo'] = 0.50

console.log(produto1)

//outra forma de declarar e inicializar, acho melhor
const produto2 = {
    nome : 'Camisa Polo',
    preco: 84.34,
    marca: {
        nome: 'Polo',
        pais: 'Brasil'
    }
}

console.log(produto2)

