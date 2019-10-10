const filhas = ['ana', 'leia']
const filhos = ['pedro', 'jose']

const todos = filhas.concat(filhos, 'fulano')
console.log(todos)
console.log(filhas)
console.log(filhos)

//podemos concatenar vários vetores
console.log(['dados:'].concat([1,2],[3,4], 5, [[6,7]]))