function rand([min=0, max=1000]){
    if (min>max) 
        // copiando os valores para um novo array de valores
        [min,max] = [max,min]
    const valor = Math.random() *(max-min)+min
    return Math.floor(valor)
}

// não há nome para os valores
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))

//gera problema pois não é possível fazer a desestruturação de objetos e vetores vazios ou undefined
//console.log(rand())