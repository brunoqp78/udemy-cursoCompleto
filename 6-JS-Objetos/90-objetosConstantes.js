// pessoa aponta para o endereco de memoria do objeto criado. ou seja a constante é um ponteiro
const pessoa = {nome:'João'}
pessoa.nome = 'Pedro' // não modifiquei a constante e sim o conteudo. Similar a referencia a objeto em Java
console.log(pessoa)

//pessoa = {nome:'Ana'} //não pode modificar a referencia, ela é constante... o endereço então


// congelar o objeto, nao é possível modificar os atributos
Object.freeze(pessoa) // o proprio objeto se torna uma constante
pessoa.nome = 'Maria' // não modifica e não dá erro, o objeto esta congelado
pessoa.end = 'Rua aaa' //não funciona
delete pessoa.nome //não funciona
console.log(pessoa)

//cria o objeto constante
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)