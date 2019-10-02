/*
melhor forma de concatenar e modificar String
*/

const nome = 'Rebeca'

const concatenar = 'Olá ' + nome

// template String é outra implementação da String, utilizando o ``
// ele permite fazer uma concateção mais estruturada
const template = `
Olá
${nome}
!`

console.log(concatenar, template)

// permite realizar funções, utilizar o ${funcoes e expressões}
console.log(`1+1 = ${1+1}`)

// criação de funções direto
// função que transforma a entrada texto em maiusculo e retorna ela
const up = texto => texto.toUpperCase()

// template String pode chamar a função
console.log(`Ei .... ${up('cuidado')}`)

//Template String é uma versão nova, utilizada principalmente para concatenar com variáveis e funções