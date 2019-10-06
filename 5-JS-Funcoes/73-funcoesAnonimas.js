// função anonima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

//essa função anonima recebe uma função/constante como parametro(operacao), caso undefined recebe soma(a constante definida)
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
//criar diretamente uma função
imprimirResultado(3,
    4,
    function (x, y) { return x - y }
)
//utilizando uma arrowfunction
imprimirResultado(3,
    4,
    (x,y)=> x*y
)

const pessoa={
    falar: function(){
        console.log('oi')
    }
}

pessoa.falar()