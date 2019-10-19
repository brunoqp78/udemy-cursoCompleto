//arrowfunction
// => arrowfunction
const soma = (a,b)=> a+b

// => não tem nome, use o nome da constante
console.log(soma(2,3))

//se usa chave precisa de return
const lexico = () => console.log(this ===exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('udi')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}

console.log(total(2,3,4,5))