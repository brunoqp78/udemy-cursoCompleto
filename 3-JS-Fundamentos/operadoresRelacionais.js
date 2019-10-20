// resultados sempre é verdadeiro ou falso
console.log('01T', '1' == 1)
// comparação estritamente igual (tipo e valor)
console.log('02T', '1' === 1)

console.log('03T', '3' != 3)

//estritamente diferente
console.log('04T', '3' !== 3)
console.log('05T', 3<2)
console.log('06T', 3>2)
console.log('07T', 3<=2)
console.log('08T', 3>=2)

const d1 = new Date()
const d2 = new Date()
// compara posições de memória, os dois
console.log('09T', d1 === d2)
console.log('10T', d1 == d2)

// compara o valor numerico
console.log('11T', d1.getTime() === d2.getTime())

console.log('12T', undefined ==null)
console.log('12T', undefined ===null)

//via de regra é melhor o ===, por ser fracamente tipada



