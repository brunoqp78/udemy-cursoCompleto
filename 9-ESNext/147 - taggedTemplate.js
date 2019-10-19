// taggedTemplate - processar uma template string em uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

// serão os valores
const aluno = 'Gui'
const situacao = 'Aprovado'
// as partes serão "", " está ", "."
console.log(tag `${aluno} está ${situacao}.`)