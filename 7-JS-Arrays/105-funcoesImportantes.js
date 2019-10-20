
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// pilotos(a referencia) = não pode mudar
// pilotos = []

//podemos modificar o vetor, o conteudo apenas

// remove o ultimo elemento 
pilotos.pop()
console.log(pilotos)

// insere na última posição
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento de um array, apaga de verdade, diferente do delete
pilotos.shift()
console.log(pilotos)

// insere no inicio do vetor
pilotos.unshift('Hamilton')
console.log(pilotos)

// adicionar e remover em qualquer lugar
// splice(posicao, quantidade a remover, ...novos elementos)
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// remove um elemento a partir de 3, sem inserir novos
pilotos.splice(3,1)
console.log(pilotos)

// gerar novo vetor, 1 parametro, que indica a posição do corte, o novo vetor é o fim, após o parametro
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// gerar novo vetor, 1 parametro é o inicio do corte e o segundo é o fim, sem considerar a posição
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
