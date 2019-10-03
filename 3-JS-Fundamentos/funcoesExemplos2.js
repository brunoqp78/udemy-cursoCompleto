// armazenando uma função em uma variavel constante
// utilizar a variavel e utilizar a funçao
// definimos uma função anonima, apenas function
// isso é novo para mim
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

// armazenar uma função arrow em uma variavel
// bem diferente
//=> é o arrow function
const soma = (a,b) =>{
    return a+b
}
console.log(soma(2,3))

// retorno implicito
// função de 1 linha apenas
const subtracao = (a,b) => a-b
console.log(subtracao(3,2))

const imprimir2 = a => console.log(a)

imprimir2(2)
