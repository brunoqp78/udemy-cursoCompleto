//muito interessante a facilidade de modificar as bibliotecas padrão
// nesse caso criamos uma função para verificar se um Number esta entre um valor de inicio e fim
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre(9,10)){
        console.log('Nota A')
    }else if (nota.entre(7, 8.99)){
        console.log('Nota B')
    }else if (nota.entre(4,6.99))    {
        console.log('Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }
    console.log('fim')
}
imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(100)