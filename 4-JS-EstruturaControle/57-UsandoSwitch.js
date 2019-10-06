const imprimirResultadoSwitch = function (nota) {
    switch (Math.floor(nota)) { // expressão retorna um valor de um tipo válido
        // executa todos os cases, obrigado colocar o break
        case 10: //se não ter nada passa para o próximo
        case 9:
            console.log('Nota A')
            break
        case 8: case 7:
            console.log('Nota B')
            break
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('Nota Inválida')
            break
    }
}

imprimirResultadoSwitch(9)
imprimirResultadoSwitch(90)
imprimirResultadoSwitch(4)
imprimirResultadoSwitch(1)