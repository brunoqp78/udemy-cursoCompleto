const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

// não acessamos diretamente
console.log(tecnologias.react)
// acessa via get
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function (){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numeros']
])

// para cada elemento pegue o valor e a chave
chavesVariadas.forEach((v,ch)=>{
    console.log(ch, v)
})

// verifica se há um elemento
console.log(chavesVariadas.has(123))
// apagar um elemento no map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)

// inserir elemento no map
chavesVariadas.set(123,'a')//será sobrescrito
chavesVariadas.set(123,'b')// insere esse
console.log(chavesVariadas.get(123))

