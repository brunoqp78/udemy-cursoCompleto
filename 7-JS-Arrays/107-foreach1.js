const vetor = ['ana', 'jose', 'pedro']
// percorre o vetor e captura cada elemento em element. Então utilize no bloco
vetor.forEach(element => {
    console.log(element)
});

// forma como o professor fez
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1} =  ${nome}`)
})

// usando uma arrowFunction para pegar e imprimir o nome, a primeira variavel pega o conteudo e a segunda o indice
aprovados.forEach(nome=>console.log(nome))

// criei uma função arrow e salvei na variavel
const exibirAprovados = aprovado =>console.log(aprovado)
aprovados.forEach(exibirAprovados)

// criei uma função arrow e salvei na variavel
const exibirAprovados2 = (aprovado, index) =>console.log(aprovado, index)
aprovados.forEach(exibirAprovados2)

// o terceiro parametro é o proprio vetor
aprovados.forEach(function(nome, indice, array, outro) {
    console.log(`${indice+1} =  ${nome} - ${array} - ${outro}`)
})
