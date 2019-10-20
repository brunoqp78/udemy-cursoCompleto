// como o node armazena os modulos em cache.
// contadorA e contadorB estarão apontando para o mesmo contador, quando ele é um objeto apenas
const contadorA = require('./insttanciaUnica')
const contadorB = require('./insttanciaUnica')

// usando a fabrica no modulo, ele retorna um objeto para cada chamada, teremos dois contadores distintos
const contadorC = require('./instanciaNova')() //chama a função
const contadorD = require('./instanciaNova')() //chama a função

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // imprime 3, incrementado pelo contadorA

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)// contadorD é diferente, então o valor é o original