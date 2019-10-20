require('./global')
require('./global2')

console.log(MinhaAPP.saudacao())
console.log(global.MinhaAPP.nome)

//problema, podemos mudar em qualquer lugar
MinhaAPP.nome = 'deu merda'
console.log(MinhaAPP.nome)

//opção é usar o Object.freeze quando cria o global. Olhar no arquivo
//problema, podemos mudar em qualquer lugar
MinhaAPP2.nome = 'deu merda' // não modifica
console.log(MinhaAPP2.nome)
