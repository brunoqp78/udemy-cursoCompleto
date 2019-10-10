// criando o nosso forEach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// minha solucao
// defino uma nova propriedade no vetor aprovados, que é um vetor/Objeto.
// essa nova propriedade é a função forEach2
// que tem os seguintes parametros, uma função que recebe a função original e executa essa função no vetor
// o parametro enumerable, para não considerar a função na enumeração
Object.defineProperty(aprovados, 'forEach2',{
    value: function(funcao) {
        aprovados.forEach((element, cont) => {
            funcao(element, cont++)},            
        )},
    enumerable: false
})

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1} =  ${nome}`)
})

//solução do professor
Array.prototype.forEach3 = function(funcao){
    for(let i=0; i< this.length; i++){
        funcao(this[i], i, this)
    }
}

aprovados.forEach3(function(nome, indice) {
    console.log(`${indice+1} =  ${nome}`)
})
