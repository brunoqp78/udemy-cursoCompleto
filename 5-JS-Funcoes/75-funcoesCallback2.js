const notas = [7.7, 5.6, 7.7, 8.8, 5.4, 6.5]
//fazer uma função utilizando callback e uma sem callback

//extrair notas menores que 7
//abordagem sem callback

let notasBaixas = []
for(let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
//se a função callback retornar true a filter insere no novo, se false não
const notasBaixas2 = notas.filter(
    // o parametro nota recebe o conteudo do vetor notas para cada elemento
    function (nota){
    return nota<7
})

console.log(notasBaixas2)

//usando função callback e arrowfunction
const notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas3)

const notamenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notamenorQue7)
console.log(notasBaixas4)