//herança baseada em prototipos
//Procura na classe atual, procura no prototipo(classe) indicada(herdada), em todos os níveis. Se achar utiliza, senão é undefined

//Todo objeto criado, com new, tem uma referencia para Object.prototype. Mas podemos modificar

// criar constante/objeto
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//retorna quem é o prototipo//classesuperior do objeto
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)//true
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__) // Object.prototype é o limite superior na hierarquia de Objetos

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log(MeuObjeto.prototype) // prototype existe dentro de funções, não de objetos
console.log(ferrari.prototype) // prototype existe dentro de funções, não de objetos