// não é obrigatorio retornar, o retorno default é undefined
function area(largura,altura){
    const area = largura * altura
    if (area>20){
        console.log(`Valor acima do permitido:${area}m2`)
    }else{
        return area
    }
}

//não recomendado falta de padrão de retorno
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2))
console.log(area(2,20))


