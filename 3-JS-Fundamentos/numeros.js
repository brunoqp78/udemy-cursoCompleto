/*
A biblioteca Number contem várias funções para tratar números(inteiros e reais)
Em javaScript int e float são number
*/

const peso1 = 10
//função da classe number que converte um texto para um número
const peso2 = Number('2.0')

console.log(peso1, peso2)

//isInteger é uma função que verifica se o número é inteiro
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.87443432
const avaliacao2 = 6.87432424

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)

//fixa a quantidade de casas decimais após o ponto
console.log(media.toFixed(2))
// toString : converte o número em String
console.log(media.toString())

// toString : passe a base para gerar um número na base numerica informada
console.log(media.toString(2))
// typeof retorna o tipo de dados
console.log(typeof media)