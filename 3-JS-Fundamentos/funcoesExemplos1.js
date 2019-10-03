// função sem retorno. Não fica explicito no código

// é uma ação/verbo. bloco instruções para fazer uma ação

// função sem retorno
// não precisa de var, let ou const nos parametros
// qual o tipo = não sei = é fracamente tipada
function imprimirSoma(a, b){
    console.log(a+b)
}

// chamada de código, no javaScript não é necessário um bloco principal
imprimirSoma(2,3)

// podemos passar apenas um numero na função ou outro será atribuido como undefined
// retorna NaN
imprimirSoma(2)

// podemos passar infinitos parametros, só usa aqueles da assinatura
imprimirSoma(2,3,4,5,6)

// se não definir nenhum parametro, ele assume tudo undefined e retorna NaN
imprimirSoma()

//funções com retorno
// similar ao anterior, observe que é possível definir um valor padrão(b=0), para os casos no qual b não for definido
function soma(a, b=0){
    return a+b // retorna um valor
}

// utilizar o valor retornado
console.log(soma(2,3))

// ele define o b como 0, o seu valor default na função
console.log(soma(2))