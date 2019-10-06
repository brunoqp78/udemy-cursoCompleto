function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    
    //criar objeto com os valores, podemos omitir o nome dos valores
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(false, false))