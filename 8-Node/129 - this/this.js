// no modulo this aponta para ele(modulo.exports)
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// em funções, mesmo no modulo, this aponta para global
function logThis() {
    console.log('Dentro de uma função....')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // voce cria variavel global
}

this.naoperigo = 'tranquilo' // variavel do modulo
logThis()