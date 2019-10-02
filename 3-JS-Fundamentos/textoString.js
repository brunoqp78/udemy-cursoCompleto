/*
String é uma cadeia de caracteres
pode delimitar com 
""
''
``
*/

const escola = 'udemy 10'

// função charAt da classe String que retorna um caracter. Igual ao Java
console.log(escola.charAt(0))

// função que retorna o número da tabela asc do caractere na posição indicada
console.log(escola.charCodeAt(3))

// retorna a posição da primeira ocorrẽncia. Similar ao Java
console.log(escola.indexOf('3'))

// retorna a substring a partir da posição 1
console.log(escola.substring(1))


// similar ao java retorna uma substring de 0 a 2(não considera o 3)
console.log(escola.substring(0,3))

// concatenar textos
console.log('Escola '.concat(escola).concat(";"))

// fazer replace de caracteres
// utilizando o regex. substituindo todos os números 
console.log(escola.replace(/\d/g, 'e'))

// converte um texto em um vetor(array)
console.log('Ana,Maria,Pedro'.split(','))

// retorna a quantidade de caracteres
console.log(escola.length)

//remove os caracteres a esquerda
console.log('  dsfs'.trim())

// o operador + concatena, os demais aplica a operação artimetica
console.log('2'/2)
console.log('2'+2)
console.log('2'-2)