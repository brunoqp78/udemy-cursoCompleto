//introduzido pelo js2015
// o this é associado ao contexto no qual a função é criada
let dobro = function(a){
    return 2*a
}

// arrow function - uma sintaxe possivel
dobro = (a) =>{
    return 2*a
}

// arrow function - com um parametro e uma linha no bloco
dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Ola'
}

ola = () => 'Ola'

//parametro de mentira, é mas não sera utilizado
ola = _ => 'Ola'

console.log(ola())