//como evitar o excesso de flexibilidade do JS

//Object.preventExtensions
//evitar adicionar novos objetos e propriedades

const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco:1.90,
    tag:'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' // funciona, pois não esta congelado
produto.descrição = 'Borracha escolar branca' // não permite
delete produto.tag
console.log(produto)
//ou seja podemos excluir e modificar valor, não adicionar novas propriedades

// Object.sel
// Não permite criar e excluir os atributos
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não
delete pessoa.nome // não
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
