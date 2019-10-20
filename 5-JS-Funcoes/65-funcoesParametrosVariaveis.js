//diferente, uma função sem parametros pode receber e usar parametros
//o vetor arguments recebe os parametros da função, mesmo que não esteja na assinatura
function soma(){
    let soma = 0
    for(i in arguments)
    {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2))
console.log(soma(1,3,4.65))
console.log(soma(1,3,'teste',5,6,7))