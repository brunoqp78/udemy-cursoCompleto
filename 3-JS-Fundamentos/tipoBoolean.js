let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//outra forma de declarar boolean
//negar duas vezes uma variável
isAtivo = 1
console.log(!!isAtivo)

console.group('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para Finalizar...')
// imprime os verdadeiros
console.log(('' || null || 0 || 'epa'))

// imprime verdadeiro ou falso dependendo da condição
console.log(!!('' || null || 0 || 'epa'))

// muito doido, com isso, temos o caso prático abaixo
// imprimir o nome ou 'Desconhecido' caso ele for falso=''
let nome = ''
console.log(nome || 'Desconhecido')
